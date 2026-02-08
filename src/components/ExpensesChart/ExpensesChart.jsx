import * as S from './ExpensesChart.styled'

const categoryColors = {
    Еда: '#FF6384',
    Транспорт: '#36A2EB',
    Жилье: '#FFCE56',
    Развлечения: '#4BC0C0',
    Образование: '#9966FF',
    Другое: '#FF9F40',
}

const mockExpenses = [
    { date: '2025-04-01', category: 'Еда', amount: 800 },
    { date: '2025-04-01', category: 'Транспорт', amount: 200 },
    { date: '2025-04-01', category: 'Жилье', amount: 1500 },
    { date: '2025-04-05', category: 'Еда', amount: 1200 },
    { date: '2025-04-05', category: 'Развлечения', amount: 800 },
    { date: '2025-04-08', category: 'Еда', amount: 900 },
    { date: '2025-04-08', category: 'Образование', amount: 2500 },
]

// Заглушка: период (в будущем — из календаря)
const useSelectedPeriod = () => {
    return {
        from: '2025-04-01',
        to: '2025-04-02',
    }
}

// Вспомогательная функция: сравнение дат
const isDateInRange = (dateStr, from, to) => {
    const date = new Date(dateStr)
    const fromDay = new Date(from)
    const toDay = new Date(to)
    toDay.setHours(23, 59, 59, 999)
    return date >= fromDay && date <= toDay
}

export const ExpensesChart = () => {
    const { from, to } = useSelectedPeriod() // ← заменится на пропс позже
    //     export const ExpensesChart = ({ period }) => {
    //     const { from, to } = period
    //     // убрать useSelectedPeriod()
    // }

    // Фильтруем траты по диапазону
    const filteredExpenses = mockExpenses.filter((expense) =>
        isDateInRange(expense.date, from, to)
    )

    // Суммируем по категориям
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

    // Форматируем даты для отображения
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date)
        return formatted.replace(/ г\.$/, '')
    }

    const isSameDay = (dateA, dateB) => {
        return new Date(dateA).toDateString() === new Date(dateB).toDateString()
    }

    return (
        <S.ChartContainer>
            <S.SelectedPeriod>
                {from && to
                    ? isSameDay(from, to)
                        ? `Расходы за ${formatDate(from)}`
                        : `Расходы за ${formatDate(from)} – ${formatDate(to)}`
                    : 'Период не выбран'}
            </S.SelectedPeriod>

            <S.TotalAmount>Итого: {total} ₽</S.TotalAmount>

            <S.Chart>
                {categories.map((category) => {
                    const amount = categoryTotals[category] || 0
                    const height = (amount / maxAmount) * 100

                    return (
                        <S.BarWrapper key={category}>
                            <S.BarValueAbove>
                                {amount > 0 ? `${amount} ₽` : ''}
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
        </S.ChartContainer>
    )
}
