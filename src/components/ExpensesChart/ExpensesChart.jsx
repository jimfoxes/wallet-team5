import * as S from './ExpensesChart.styled'
import { useNavigate } from 'react-router-dom'

// Конвертируем DD.MM.YYYY → YYYY-MM-DD
const convertToISO = (dateStr) => {
    if (!dateStr) return null
    const [day, month, year] = dateStr.split('.')
    return `${year}-${month}-${day}`
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
    { date: '2026-01-01', category: 'Еда', amount: 21990 },
    { date: '2026-01-01', category: 'Транспорт', amount: 11046 },
    { date: '2026-01-01', category: 'Жилье', amount: 0 },
    { date: '2026-01-05', category: 'Еда', amount: 0 },
    { date: '2026-01-05', category: 'Развлечения', amount: 13050 },
    { date: '2026-01-08', category: 'Еда', amount: 0 },
    { date: '2026-01-08', category: 'Образование', amount: 0 },
    { date: '2026-01-08', category: 'Другое', amount: 19106 },
]

const isDateInRange = (expenseDate, from, to) => {
    const expense = new Date(expenseDate)
    const start = from ? new Date(convertToISO(from)) : new Date()
    const end = to ? new Date(convertToISO(to)) : new Date()
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
        const date = new Date(convertToISO(dateStr))
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date)
        return formatted.replace(/ г\.$/, '')
    }

    const isSameDay = (a, b) => {
        return (
            new Date(convertToISO(a)).toDateString() ===
            new Date(convertToISO(b)).toDateString()
        )
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
