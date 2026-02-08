import * as S from './Analytics.styled'
import { ExpensesChart } from '../ExpensesChart/ExpensesChart'
// const [period, setPeriod] = useState({ from: '2025-04-01', to: '2025-04-07' })
//убрать коммиты после создания и импорта календаря

const Analytics = () => {
    return (
        <>
            <S.BodyContainer>
                <S.AnalyticsTitle>Анализ расходов</S.AnalyticsTitle>
                <S.ContentContainer>
                    {/* <Calendar onPeriodChange={setPeriod} />
                <ExpensesChart period={period} /> */}
                    <ExpensesChart />
                </S.ContentContainer>
            </S.BodyContainer>
        </>
    )
}

export default Analytics
