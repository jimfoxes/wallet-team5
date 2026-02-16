import * as S from './ExpensesChart.styled'
import { useNavigate } from 'react-router-dom'

// Конвертируем DD.MM.YYYY → YYYY-MM-DD
const convertToISO = (dateStr) => {
    if (!dateStr) return null
    const [day, month, year] = dateStr.split('.')
    return `${year}-${month}-${day}`
}

const parseDate = (dateStr) => {
    if (!dateStr) return null

    // Если формат DD.MM.YYYY
    if (dateStr.includes('.')) {
        const [day, month, year] = dateStr.split('.')
        return new Date(+year, +month - 1, +day)
    }

    // Если формат YYYY-MM-DD
    if (dateStr.includes('-')) {
        const [year, month, day] = dateStr.split('-')
        return new Date(+year, +month - 1, +day)
    }

    // На всякий случай — fallback
    return new Date(dateStr)
}

const categoryColors = {
    Еда: 'rgba(217, 182, 255, 1);',
    Транспорт: 'rgba(255, 181, 61, 1);',
    Жилье: 'rgba(110, 228, 254, 1);',
    Развлечения: 'rgba(176, 174, 255, 1);',
    Образование: 'rgba(188, 236, 48, 1);',
    Другое: 'rgba(255, 185, 184, 1);',
}

const mockExpenses = [
    { id: 1, description: 'Пятерочка', category: 'Еда', date: '03.07.2026', amount: 3500 },
    { id: 2, description: 'Яндекс Такси', category: 'Транспорт', date: '03.07.2026', amount: 730 },
    { id: 3, description: 'Аптека Вита', category: 'Другое', date: '03.07.2026', amount: 1200 },
    { id: 4, description: 'Бургер Кинг', category: 'Еда', date: '03.07.2026', amount: 950 },
    { id: 5, description: 'Деливери', category: 'Еда', date: '02.07.2026', amount: 1320 },
    { id: 6, description: 'Кофейня №1', category: 'Еда', date: '02.07.2026', amount: 400 },
    { id: 7, description: 'Бильярд', category: 'Развлечения', date: '29.06.2026', amount: 600 },
    { id: 8, description: 'Перекресток', category: 'Еда', date: '29.06.2026', amount: 2360 },
    { id: 9, description: 'Лукойл', category: 'Транспорт', date: '29.06.2026', amount: 1000 },
    { id: 10, description: 'Летуаль', category: 'Другое', date: '29.06.2026', amount: 4300 },
    { id: 11, description: 'Яндекс Такси', category: 'Транспорт', date: '28.06.2026', amount: 320 },
    { id: 12, description: 'Перекресток', category: 'Еда', date: '28.06.2026', amount: 1360 },
    { id: 13, description: 'Деливери', category: 'Еда', date: '28.06.2026', amount: 2320 },
    { id: 14, description: 'Вкусвилл', category: 'Еда', date: '27.06.2026', amount: 1220 },
    { id: 15, description: 'Кофейня №1', category: 'Еда', date: '27.06.2026', amount: 920 },
    { id: 16, description: 'Вкусвилл', category: 'Еда', date: '26.06.2026', amount: 840 },
    { id: 17, description: 'Кофейня №1', category: 'Еда', date: '26.06.2026', amount: 920 },
]

const isDateInRange = (expenseDate, from, to) => {
    const expense = parseDate(expenseDate)
    const start = from ? parseDate(from) : new Date()
    const end = to ? parseDate(to) : new Date()
    end.setHours(23, 59, 59, 999)
    return expense >= start && expense <= end
}

export const ExpensesChart = ({ period }) => {
    const { from, to } = period || {}
    const navigate = useNavigate()

    const filteredExpenses = mockExpenses.filter((expense) =>
        isDateInRange(expense.date, from, to)
    )

    const categoryTotals = filteredExpenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount
        return acc
    }, {})

    const categories = Object.keys(categoryColors)

    const total = Object.values(categoryTotals).reduce(
        (sum, val) => sum + val,
        0
    )
    const maxAmount = Math.max(...Object.values(categoryTotals), 1)

    const formatDate = (dateStr) => {
        const date = parseDate(dateStr)
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date)
        return formatted.replace(/ г\.$/, '')
    }

    const isSameDay = (a, b) => {
        return parseDate(a).toDateString() === parseDate(b).toDateString()
    }

    const formatNumber = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num)
    }

    const handleCalendarClick = () => {
        navigate('/analytics')
    }

    return (
        <S.ChartContainer>
            <S.TotalAmount>{formatNumber(total)} ₽</S.TotalAmount>
            <S.SelectedPeriodContainer>
                {from && to ? (
                    isSameDay(from, to) ? (
                        <>
                            <S.PrefixText>Расходы за </S.PrefixText>
                            <S.DateContainer>
                                <S.DateText>{formatDate(from)}</S.DateText>
                            </S.DateContainer>
                        </>
                    ) : (
                        <>
                            <S.PrefixText>Расходы за </S.PrefixText>
                            <S.DateContainer>
                                <S.DateText>{formatDate(from)}</S.DateText>
                                <S.SeparatorText> – </S.SeparatorText>
                                <S.DateText>{formatDate(to)}</S.DateText>
                            </S.DateContainer>
                        </>
                    )
                ) : (
                    <S.NoDataText>Период не выбран</S.NoDataText>
                )}
            </S.SelectedPeriodContainer>

            <S.Chart>
                {categories.map((category) => {
                    const amount = categoryTotals[category] || 0
                    const height = (amount / maxAmount) * 100

                    return (
                        <S.BarWrapper key={category}>
                            <S.BarValueAbove>
                                {amount > 0 ? `${formatNumber(amount)} ₽` : ''}
                            </S.BarValueAbove>
                            <S.Bar
                                $height={height}
                                $color={categoryColors[category]}
                            />
                            <S.BarLabel>{category}</S.BarLabel>
                        </S.BarWrapper>
                    )
                })}
            </S.Chart>
            <S.CalendarButtonContainer>
                <S.CalendarButton onClick={handleCalendarClick}>
                    Выбрать другой период
                </S.CalendarButton>
            </S.CalendarButtonContainer>
        </S.ChartContainer>
    )
}
