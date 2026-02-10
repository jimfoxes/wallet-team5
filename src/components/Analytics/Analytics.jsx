import * as S from './Analytics.styled'
import Calendar from '../Calendar/Calendar'

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

                <S.ChartColumn>
                    <h1>Диаграмма</h1>
                </S.ChartColumn>
            </S.ColumnsLayout>
        </S.AnalyticsContainer>
    )
}

export default Analytics
