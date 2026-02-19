import * as S from './ExpensesChart.styled'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchTransactions } from '../../services/api'

const parseDate = (dateStr) => {
    if (!dateStr) return null

    if (dateStr.includes('.')) {
        const [day, month, year] = dateStr.split('.')
        return new Date(+year, +month - 1, +day)
    }

    if (dateStr.includes('-')) {
        const [year, month, day] = dateStr.split('-')
        return new Date(+year, +month - 1, +day)
    }

    return new Date(dateStr)
}

// Словарь: API категории → Русские названия
const apiToCategory = {
    food: 'Еда',
    transport: 'Транспорт',
    housing: 'Жилье',
    joy: 'Развлечения',
    education: 'Образование',
    others: 'Другое',
}

const formatDateFromISO = (isoString) => {
    const date = new Date(isoString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
}

const categoryColors = {
    Еда: 'rgba(217, 182, 255, 1);',
    Транспорт: 'rgba(255, 181, 61, 1);',
    Жилье: 'rgba(110, 228, 254, 1);',
    Развлечения: 'rgba(176, 174, 255, 1);',
    Образование: 'rgba(188, 236, 48, 1);',
    Другое: 'rgba(255, 185, 184, 1);',
}

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

    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            setError('Токен не найден')
            setLoading(false)
            return
        }

        const loadExpenses = async () => {
            try {
                setLoading(true)
                setError('')

                const data = await fetchTransactions({ token })

                const formattedExpenses = data.map((item) => ({
                    id: item._id,
                    description: item.description,
                    category: apiToCategory[item.category] || item.category,
                    date: formatDateFromISO(item.date),
                    amount: Number(item.sum),
                }))

                setExpenses(formattedExpenses)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadExpenses()
    }, [])

    const filteredExpenses = expenses.filter((expense) =>
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

    if (loading) {
        return <S.ChartContainer>Загрузка данных...</S.ChartContainer>
    }

    if (error) {
        return <S.ChartContainer>Ошибка: {error}</S.ChartContainer>
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
