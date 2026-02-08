import * as S from './Analytics.styled'
import { ExpensesChart } from '../ExpensesChart/ExpensesChart'
// const [period, setPeriod] = useState({ from: '2025-04-01', to: '2025-04-07' })
//убрать коммиты после создания и импорта календаря

const Analytics = () => {
    return (
        <>
            <S.AnalyticsTitle>Страница анализа расходов</S.AnalyticsTitle>
            {/* <Calendar onPeriodChange={setPeriod} />
            <ExpensesChart period={period} /> */}
            <ExpensesChart />
        </>
    )
}

export default Analytics
