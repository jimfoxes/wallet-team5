import * as S from './Analytics.styled'
Верстка-календаря-на-странице-Анализов-без-логики
import Calendar from '../Calendar/Calendar'

const Analytics = () => {
    return (
        <S.AnalyticsContainer>
            <S.AnalyticsTitle>Анализ расходов</S.AnalyticsTitle>

            <S.ColumnsLayout>
                <S.CalendarColumn>
                    <Calendar selectedDate="16.01.2026" onDateSelect={(date) => console.log(date)} />                    
                </S.CalendarColumn>
            </S.ColumnsLayout>
        </S.AnalyticsContainer>

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
main
    )
}

export default Analytics
