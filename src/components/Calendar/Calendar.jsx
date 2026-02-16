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

const Calendar = ({
    selectedPeriod = { from: '01.01.2026', to: '16.01.2026' },
    onPeriodSelect,
}) => {
    const [period, setPeriod] = useState(selectedPeriod)
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

        // Если нет начальной даты или уже выбран период - начинаем новый выбор
        if (!tempStart || (tempStart && tempEnd)) {
            setTempStart(parsedDate)
            setTempEnd(null)
            // Очищаем выбранный период при начале нового выбора
            setPeriod({ from: '', to: '' })
            return
        }

        // Если есть начальная дата - устанавливаем конечную
        if (tempStart) {
            // Проверяем, чтобы конечная дата была не раньше начальной
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
                setTempEnd(parsedDate)

                // На десктопе сразу применяем период
                const isMobile = window.innerWidth <= 1024
                if (!isMobile) {
                    applyPeriod()
                }
            } else {
                // Если кликнули на дату раньше начальной - меняем местами
                setTempEnd(tempStart)
                setTempStart(parsedDate)
            }
        }
    }

    const applyPeriod = () => {
        if (tempStart && tempEnd) {
            const newPeriod = {
                from: formatDate(
                    tempStart.day,
                    tempStart.month,
                    tempStart.year
                ),
                to: formatDate(tempEnd.day, tempEnd.month, tempEnd.year),
            }

            setPeriod(newPeriod)
            setTempStart(null)
            setTempEnd(null)

            if (onPeriodSelect) {
                onPeriodSelect(newPeriod)
            }
        }
    }

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
                                        year: year,
                                    }

                                    const formattedDate = formatDate(
                                        day.number,
                                        monthIndex + 1,
                                        year
                                    )

                                    // Проверяем текущую дату
                                    const isCurrent =
                                        formattedDate === todayString

                                    // Проверяем, находится ли дата в выбранном периоде
                                    const isInSelectedPeriod =
                                        period.from &&
                                        period.to &&
                                        isDateInRange(
                                            currentDate,
                                            parseDate(period.from),
                                            parseDate(period.to)
                                        )

                                    // Проверяем, является ли дата началом или концом периода
                                    const isStartOrEnd =
                                        period.from &&
                                        period.to &&
                                        (isSameDate(
                                            currentDate,
                                            parseDate(period.from)
                                        ) ||
                                            isSameDate(
                                                currentDate,
                                                parseDate(period.to)
                                            ))

                                    // Проверяем, находится ли дата во временном периоде (при выборе)
                                    const isInTempPeriod =
                                        tempStart &&
                                        tempEnd &&
                                        isDateInRange(
                                            currentDate,
                                            tempStart,
                                            tempEnd
                                        )

                                    // Проверяем, является ли дата начальной точкой выбора
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
                    onClick={applyPeriod}
                    disabled={!tempStart || !tempEnd}
                >
                    Выбрать период
                </S.CalendarBtn>
            </S.CalendarFooter>
        </S.CalendarContainer>
    )
}

export default Calendar
