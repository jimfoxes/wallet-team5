import React, { useState } from 'react'
import * as S from './Calendar.styled'

import {
    formatDate,
    getDaysInMonth,
    getFirstDayOfMonth,
    generateMonthDays,
    parseDate,
    isSameDate,
    isDateInRange,
} from '../../utils/dateUtils'

const Calendar = ({ selectedPeriod, onPeriodSelect }) => {
    const [tempStart, setTempStart] = useState(null)
    const [tempEnd, setTempEnd] = useState(null)
    const year = 2026
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    // Сегодняшняя дата
    const today = new Date()
    const todayString = formatDate(
        today.getDate(),
        today.getMonth() + 1,
        today.getFullYear()
    )

    const handleDateClick = (day, monthIndex) => {
        if (day === '') return

        const clickedDate = formatDate(day, monthIndex + 1, year)
        const parsedDate = parseDate(clickedDate)

        // Если уже выбран полный период (внешний from и to), начинаем заново
        if (from && to && !tempStart && !tempEnd) {
            setTempStart(parsedDate)
            setTempEnd(null)
            // Сбрасываем внешний период через колбэк
            if (onPeriodSelect) {
                onPeriodSelect({ from: '', to: '' })
            }
            return
        }

        // Если нет начальной даты — устанавливаем её
        if (!tempStart) {
            setTempStart(parsedDate)
            return
        }

        // Если есть начальная, но нет конечной — устанавливаем конец
        if (tempStart && !tempEnd) {
            const startDateObj = new Date(
                tempStart.year,
                tempStart.month - 1,
                tempStart.day
            )
            const clickedDateObj = new Date(
                parsedDate.year,
                parsedDate.month - 1,
                parsedDate.day
            )

            if (clickedDateObj >= startDateObj) {
                // Обычный порядок
                setTempEnd(parsedDate)
                applyPeriod(parsedDate)
            } else {
                // Обратный порядок: clicked < tempStart
                // from = clicked, to = tempStart
                const newPeriod = {
                    from: formatDate(
                        parsedDate.day,
                        parsedDate.month,
                        parsedDate.year
                    ),
                    to: formatDate(
                        tempStart.day,
                        tempStart.month,
                        tempStart.year
                    ),
                }

                setTempStart(null)
                setTempEnd(null)

                if (onPeriodSelect) {
                    onPeriodSelect(newPeriod)
                }
            }
        }
    }

    const applyPeriod = (end = tempEnd) => {
        if (tempStart && end) {
            const newPeriod = {
                from: formatDate(
                    tempStart.day,
                    tempStart.month,
                    tempStart.year
                ),
                to: formatDate(end.day, end.month, end.year),
            }

            setTempStart(null)
            setTempEnd(null)

            if (onPeriodSelect) {
                onPeriodSelect(newPeriod)
            }
        }
    }

    const { from, to } = selectedPeriod || {}

    return (
        <S.CalendarContainer>
            <S.CalendarHeader>
                <S.CalendarTitle>Период</S.CalendarTitle>

                <S.CalendarTitleMobile>
                    <S.Link href="/">
                        <S.LinkIconMob>➜</S.LinkIconMob>
                        <S.LinkTitleMob>Анализ расходов</S.LinkTitleMob>
                    </S.Link>
                    <S.CalendarTitleMob>Выбор периода</S.CalendarTitleMob>
                </S.CalendarTitleMobile>

                <S.WeekdaysContainer>
                    {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
                        <S.Weekday key={day}>{day}</S.Weekday>
                    ))}
                </S.WeekdaysContainer>
            </S.CalendarHeader>

            <S.CalendarScrollable>
                {monthNames.map((monthName, monthIndex) => {
                    const monthDays = generateMonthDays(monthIndex, year)

                    return (
                        <S.MonthContainer key={monthIndex}>
                            <S.MonthTitle>
                                {monthName} {year}
                            </S.MonthTitle>

                            <S.MonthDaysGrid>
                                {monthDays.map((day, i) => {
                                    if (day.isEmpty) {
                                        return (
                                            <S.MonthDay
                                                key={i}
                                                className="empty"
                                                style={{ cursor: 'default' }}
                                            >
                                                {day.number}
                                            </S.MonthDay>
                                        )
                                    }

                                    const dayOfWeek = i % 7
                                    const isWeekend =
                                        dayOfWeek === 5 || dayOfWeek === 6

                                    const currentDate = {
                                        day: day.number,
                                        month: monthIndex + 1,
                                        year,
                                    }

                                    const formattedDate = formatDate(
                                        day.number,
                                        monthIndex + 1,
                                        year
                                    )

                                    const isCurrent =
                                        formattedDate === todayString

                                    const isInSelectedPeriod =
                                        from &&
                                        to &&
                                        isDateInRange(
                                            currentDate,
                                            parseDate(from),
                                            parseDate(to)
                                        )

                                    const isStartOrEnd =
                                        from &&
                                        to &&
                                        (isSameDate(
                                            currentDate,
                                            parseDate(from)
                                        ) ||
                                            isSameDate(
                                                currentDate,
                                                parseDate(to)
                                            ))

                                    const isInTempPeriod =
                                        tempStart &&
                                        tempEnd &&
                                        isDateInRange(
                                            currentDate,
                                            tempStart,
                                            tempEnd
                                        )

                                    const isTempStart =
                                        tempStart &&
                                        isSameDate(currentDate, tempStart)
                                    const isTempEnd =
                                        tempEnd &&
                                        isSameDate(currentDate, tempEnd)

                                    return (
                                        <S.MonthDay
                                            key={i}
                                            className={`
                                                ${isWeekend ? 'weekend' : ''}
                                                ${isCurrent ? 'current' : ''}
                                                ${isInSelectedPeriod ? 'in-period' : ''}
                                                ${isStartOrEnd ? 'period-boundary' : ''}
                                                ${isInTempPeriod ? 'in-temp-period' : ''}
                                                ${isTempStart || isTempEnd ? 'temp-boundary' : ''}
                                            `}
                                            onClick={() =>
                                                handleDateClick(
                                                    day.number,
                                                    monthIndex
                                                )
                                            }
                                        >
                                            {day.number}
                                        </S.MonthDay>
                                    )
                                })}
                            </S.MonthDaysGrid>
                        </S.MonthContainer>
                    )
                })}
            </S.CalendarScrollable>

            <S.CalendarFooter>
                <S.CalendarBtn
                    onClick={() => applyPeriod()}
                    disabled={!tempStart || !tempEnd}
                >
                    Выбрать период
                </S.CalendarBtn>
            </S.CalendarFooter>
        </S.CalendarContainer>
    )
}

export default Calendar
