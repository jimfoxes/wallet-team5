import * as S from './Analytics.styled'
import Calendar from '../Calendar/Calendar'
import { ExpensesChart } from '../ExpensesChart/ExpensesChart'

const Analytics = () => {
    return (
        <S.AnalyticsContainer>
            <S.AnalyticsTitle>Анализ расходов</S.AnalyticsTitle>

            <S.ColumnsLayout>
                <S.CalendarColumn>
                    <Calendar
                        selectedDate="16.01.2026"
                        onDateSelect={(date) => console.log(date)}
                    />
                </S.CalendarColumn>

                <S.ContentContainer>
                    <ExpensesChart />
                </S.ContentContainer>
            </S.ColumnsLayout>
        </S.AnalyticsContainer>
    )
}

export default Analytics