import React, { useState } from 'react'
import * as S from './Analytics.styled'
import Calendar from '../Calendar/Calendar'
import { ExpensesChart } from '../ExpensesChart/ExpensesChart'

const Analytics = () => {
    const [period, setPeriod] = useState({
        from: '01.01.2026',
        to: '16.01.2026',
    })

    const handlePeriodSelect = (newPeriod) => {
        setPeriod(newPeriod)
        console.log('Выбранный период:', newPeriod)
    }

    return (
        <S.AnalyticsContainer>
            <S.AnalyticsTitle>Анализ расходов</S.AnalyticsTitle>

            <S.ColumnsLayout>
                <S.CalendarColumn>
                    <Calendar
                        selectedPeriod={period}
                        onPeriodSelect={handlePeriodSelect}
                    />
                </S.CalendarColumn>

                <S.ContentContainer>
                    <ExpensesChart period={period} />
                </S.ContentContainer>
            </S.ColumnsLayout>
        </S.AnalyticsContainer>
    )
}

export default Analytics
