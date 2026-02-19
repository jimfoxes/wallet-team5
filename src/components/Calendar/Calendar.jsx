import React, { useState, useEffect } from 'react'
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
    const [isMobile, setIsMobile] = useState(false)

    // Внутреннее состояние для отображения текущего периода
    const [currentPeriod, setCurrentPeriod] = useState({ from: null, to: null })

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

    // Синхронизируем currentPeriod с внешним selectedPeriod при изменении
    useEffect(() => {
        if (selectedPeriod?.from && selectedPeriod?.to) {
            setCurrentPeriod(selectedPeriod)
        }
    }, [selectedPeriod])

    // Определяем, мобильное ли устройство
    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 768
        setIsMobile(checkMobile())
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Сегодняшняя дата
    const today = new Date()
    const todayString = formatDate(
        today.getDate(),
        today.getMonth() + 1,
        today.getFullYear()
    )

    // --- Вспомогательные функции для подсветки ---
    const isDateSelected = (
        day,
        monthIndex,
        year,
        selectedFrom,
        selectedTo
    ) => {
        if (!selectedFrom || !selectedTo) return false
        const from = parseDate(selectedFrom)
        const to = parseDate(selectedTo)
        const current = { day, month: monthIndex + 1, year }
        return isDateInRange(current, from, to)
    }

    const isSelectedStart = (day, monthIndex, year, selectedFrom) => {
        if (!selectedFrom) return false
        const from = parseDate(selectedFrom)
        return (
            from.day === day &&
            from.month === monthIndex + 1 &&
            from.year === year
        )
    }

    const isSelectedEnd = (day, monthIndex, year, selectedTo) => {
        if (!selectedTo) return false
        const to = parseDate(selectedTo)
        return to.day === day && to.month === monthIndex + 1 && to.year === year
    }

    const handleDateClick = (day, monthIndex) => {
        if (day === '') return

        const clickedDate = formatDate(day, monthIndex + 1, year)
        const parsedDate = parseDate(clickedDate)

        // Если уже есть полный период — начинаем новый выбор → сбрасываем временные данные
        if (currentPeriod.from && currentPeriod.to && !tempStart && !tempEnd) {
            setTempStart(parsedDate)
            setTempEnd(null)
            return
        }

        // Если нет начальной даты — устанавливаем её
        if (!tempStart) {
            setTempStart(parsedDate)
            setTempEnd(null)
            return
        }

        // Есть начальная, но нет конечной
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

            let newStart = tempStart
            let newEnd = parsedDate

            if (clickedDateObj < startDateObj) {
                newStart = parsedDate
                newEnd = tempStart
            }

            setTempStart(newStart)
            setTempEnd(newEnd)

            // --- Автоматически применяем на десктопе ---
            if (!isMobile) {
                const newPeriod = {
                    from: formatDate(
                        newStart.day,
                        newStart.month,
                        newStart.year
                    ),
                    to: formatDate(newEnd.day, newEnd.month, newEnd.year),
                }
                onPeriodSelect(newPeriod)
                setCurrentPeriod(newPeriod) // Сохраняем как текущий
                setTempStart(null)
                setTempEnd(null)
            }
        }
    }

    // --- Кнопка "Выбрать период" (только для мобильных) ---
    const handleApplyPeriod = () => {
        if (!tempStart || !tempEnd) return

        const newPeriod = {
            from: formatDate(tempStart.day, tempStart.month, tempStart.year),
            to: formatDate(tempEnd.day, tempEnd.month, tempEnd.year),
        }

        onPeriodSelect(newPeriod)
        setCurrentPeriod(newPeriod) // Устанавливаем как текущий
        setTempStart(null)
        setTempEnd(null)
    }

    // Показываем старый выбранный период ТОЛЬКО если нет активного временного выбора
    const showCurrentPeriod =
        currentPeriod.from && currentPeriod.to && !tempStart && !tempEnd
    const { from, to } = showCurrentPeriod
        ? currentPeriod
        : { from: null, to: null }

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

                                    // Подсвечиваем только если в currentPeriod
                                    const isInSelectedPeriod = isDateSelected(
                                        day.number,
                                        monthIndex,
                                        year,
                                        from,
                                        to
                                    )
                                    const isSelectedStartFlag = isSelectedStart(
                                        day.number,
                                        monthIndex,
                                        year,
                                        from
                                    )
                                    const isSelectedEndFlag = isSelectedEnd(
                                        day.number,
                                        monthIndex,
                                        year,
                                        to
                                    )

                                    // Временный выбор (в процессе)
                                    const isInTempPeriod =
                                        tempStart &&
                                        tempEnd &&
                                        !isInSelectedPeriod &&
                                        isDateInRange(
                                            currentDate,
                                            tempStart,
                                            tempEnd
                                        )

                                    const isTempStart =
                                        tempStart &&
                                        isSameDate(currentDate, tempStart) &&
                                        !(
                                            isSelectedStartFlag &&
                                            isInSelectedPeriod
                                        )

                                    const isTempEnd =
                                        tempEnd &&
                                        isSameDate(currentDate, tempEnd) &&
                                        !(
                                            isSelectedEndFlag &&
                                            isInSelectedPeriod
                                        )

                                    return (
                                        <S.MonthDay
                                            key={i}
                                            className={`
                                                ${isWeekend ? 'weekend' : ''}
                                                ${isCurrent ? 'current' : ''}
                                                ${isInSelectedPeriod ? 'in-period' : ''}
                                                ${isSelectedStartFlag ? 'period-boundary' : ''}
                                                ${isSelectedEndFlag ? 'period-boundary' : ''}
                                                ${isInTempPeriod ? 'in-temp-period' : ''}
                                                ${isTempStart ? 'temp-boundary' : ''}
                                                ${isTempEnd ? 'temp-boundary' : ''}
                                            `.trim()}
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
                    onClick={handleApplyPeriod}
                    disabled={!tempStart || !tempEnd}
                >
                    Выбрать период
                </S.CalendarBtn>
            </S.CalendarFooter>
        </S.CalendarContainer>
    )
}

export default Calendar
