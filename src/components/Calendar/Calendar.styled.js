import styled from 'styled-components'

const COLORS = {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
    gray: 'rgba(153, 153, 153, 1)',
    grayLight: 'rgba(217, 217, 217, 1)',
    bgGray: 'rgba(244, 245, 246, 1)',
    primary: 'rgba(115, 52, 234, 1)',
    primaryLight: 'rgba(241, 235, 253, 1)',
    primaryDark: 'rgba(95, 32, 214, 1)',
}

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${COLORS.white};
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 375px;
    }
`

// Header календаря
export const CalendarHeader = styled.div`
    height: 113px;
    padding: 32px 32px 0 32px;
    border-bottom: 0.5px solid ${COLORS.gray};
    background: ${COLORS.white};
    position: sticky;
    top: 0;
    z-index: 10;
    flex-shrink: 0;

    @media (max-width: 768px) {
        height: 127px;
        padding: 24px 16px 0 16px;
    }
`

export const CalendarTitle = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: left;
    color: ${COLORS.black};
    margin-bottom: 24px;

    @media (max-width: 768px) {
        display: none;
    }
`

// Header моб.версии календаря
export const CalendarTitleMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 16px;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: ${COLORS.gray};
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

export const LinkIconMob = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    font-size: 10px;
    background-color: ${COLORS.gray};
    color: rgb(255, 255, 255);
    border-radius: 3px;
    transform: rotate(180deg);
`

export const LinkTitleMob = styled.p`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    color: ${COLORS.gray};
    margin-left: 6px;
`

export const CalendarTitleMob = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: left;
    color: ${COLORS.black};
    margin: 0;
`

export const WeekdaysContainer = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(7, 40px);
    grid-template-rows: 27px;
    align-items: center;
    justify-content: center;
`

export const Weekday = styled.div`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: ${COLORS.gray};
`

export const CalendarScrollable = styled.div`
    flex: 1;
    overflow-y: auto;

    // Стилизация скроллбара
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${COLORS.white};
    }

    &::-webkit-scrollbar-thumb {
        width: 6px;
        height: 100px;
        background: ${COLORS.grayLight};
        border-radius: 30px;
    }

    &::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
    }
`

export const MonthContainer = styled.div`
    padding: 24px 32px 0 32px;

    @media screen and (max-width: 1024px) {
        padding: 24px 16px 0 16px;
    }
`

export const MonthTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    color: ${COLORS.black};
    text-align: left;
    margin-bottom: 12px;
`

export const MonthDaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 40px);
    gap: 6px;
`

export const MonthDay = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: ${COLORS.bgGray};
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: ${COLORS.black};
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    // Пустые ячейки
    &.empty {
        background: transparent;
        border: none;
        cursor: default;
        visibility: hidden;
    }

    // Сегодня
    &.current {
        font-weight: 700;
        color: ${COLORS.black};
    }

    // Выходные дни
    &.weekend:not(.in-period):not(.period-boundary):not(.in-temp-period):not(
            .temp-boundary
        ) {
        color: ${COLORS.black};
    }

    // При наведении
    // Даты внутри выбранного периода
    // Временный период при выборе
    &:not(.empty):not(.in-period):not(.period-boundary):not(.temp-boundary):not(.in-temp-period):hover,
    &.in-period,
    &.in-temp-period {
        background: ${COLORS.primaryLight};
        color: ${COLORS.primary};
    }

    // Начало и конец периода
    // Начало и конец временного периода
    &.period-boundary,
    &.temp-boundary {
        background: ${COLORS.primary};
        color: ${COLORS.white};
        font-weight: 600;
    }
`
export const CalendarFooter = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 87px;
        background: ${COLORS.white};
        box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
        align-items: center;
        justify-content: center;
    }
`

export const CalendarBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 343px;
    height: 39px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    background: ${COLORS.primary};
    color: ${COLORS.white};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${COLORS.primaryDark};
    }
`
