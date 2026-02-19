import React, { useState } from 'react'
import * as S from './Analytics.styled'
import Calendar from '../Calendar/Calendar'
import { ExpensesChart } from '../ExpensesChart/ExpensesChart'

const Analytics = () => {
    const [period, setPeriod] = useState({
        from: '01.01.2026',
        to: '16.01.2026',
    })
    const [view, setView] = useState('chart') // 'chart' или 'calendar'

    const handlePeriodSelect = (newPeriod) => {
        setPeriod(newPeriod)
        setView('chart')
    }

    const handleOpenCalendar = () => {
        setView('calendar')
    }

    return (
        <S.AnalyticsContainer>
            <S.AnalyticsTitle>Анализ расходов</S.AnalyticsTitle>

            <S.ColumnsLayout>
                <S.CalendarColumn
                    $visibleOnDesktop={true}
                    $isVisible={view === 'calendar'}
                >
                    <Calendar
                        selectedPeriod={period}
                        onPeriodSelect={handlePeriodSelect}
                    />
                </S.CalendarColumn>
                <S.ContentContainer $show={view === 'chart'}>
                    <ExpensesChart period={period} />
                    <S.CalendarButtonContainer>
                        <S.CalendarButton onClick={handleOpenCalendar}>
                            Выбрать другой период
                        </S.CalendarButton>
                    </S.CalendarButtonContainer>
                </S.ContentContainer>
            </S.ColumnsLayout>
        </S.AnalyticsContainer>
    )
}

export default Analytics
