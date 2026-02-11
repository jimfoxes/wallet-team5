import React, { useState } from 'react'
import * as S from './Calendar.styled'

// Формат: DD.MM.YYYY
const formatDate = (day, monthNum, year) => {
    const dayStr = String(day).padStart(2, '0')
    const monthStr = String(monthNum).padStart(2, '0')
    return `${dayStr}.${monthStr}.${year}`
}

// Получить количество дней в месяце
const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
}

// Получить день недели для первого числа месяца (1 - понедельник, 7 - воскресенье)
const getFirstDayOfMonth = (month, year) => {
    const date = new Date(year, month, 1)
    return date.getDay() === 0 ? 7 : date.getDay()
}

// Генерация дней для месяца (только текущий месяц + пустые ячейки)
const generateMonthDays = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year)
    const firstDay = getFirstDayOfMonth(month, year)

    const days = []

    // Пустые ячейки для дней предыдущего месяца
    const prevMonthDays = firstDay - 1
    for (let i = 0; i < prevMonthDays; i++) {
        days.push({
            number: '',
            isEmpty: true,
        })
    }

    // Дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            number: i,
            isEmpty: false,
        })
    }

    // Пустые ячейки для дней следующего месяца
    const totalDays = days.length
    const remainingCells = (7 - (totalDays % 7)) % 7

    for (let i = 0; i < remainingCells; i++) {
        days.push({
            number: '',
            isEmpty: true,
        })
    }

    return days
}

const Calendar = ({ selectedDate = '16.01.2026', onDateSelect }) => {
    const [selectedFullDate, setSelectedFullDate] = useState(selectedDate) // ← ХРАНИМ ПОЛНУЮ ДАТУ

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

    const handleDateSelect = (day, monthIndex) => {
        const formattedDate = formatDate(day, monthIndex + 1, year)
        setSelectedFullDate(formattedDate) // ← ОБНОВЛЯЕМ ПОЛНУЮ ДАТУ

        if (onDateSelect) {
            onDateSelect(formattedDate)
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
                                    const dayOfWeek = i % 7
                                    const isWeekend =
                                        dayOfWeek === 5 || dayOfWeek === 6

                                    const formattedDate = formatDate(
                                        day.number,
                                        monthIndex + 1,
                                        year
                                    )

                                    const isCurrent =
                                        formattedDate === todayString
                                    const isSelected =
                                        formattedDate === selectedFullDate // ← СРАВНИВАЕМ ПОЛНЫЕ ДАТЫ

                                    return (
                                        <S.MonthDay
                                            key={i}
                                            className={`
                                                ${day.isEmpty ? 'empty' : ''}
                                                ${isCurrent ? 'current' : ''}
                                                ${isWeekend ? 'weekend' : ''}
                                                ${isSelected ? 'selected' : ''}
                                            `}
                                            onClick={() =>
                                                !day.isEmpty &&
                                                handleDateSelect(
                                                    day.number,
                                                    monthIndex
                                                )
                                            }
                                            style={{
                                                cursor: day.isEmpty
                                                    ? 'default'
                                                    : 'pointer',
                                            }}
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
                <S.CalendarBtn>Выбрать период</S.CalendarBtn>
            </S.CalendarFooter>
        </S.CalendarContainer>
    )
}

export default Calendar
