import styled from 'styled-components'

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    position: relative;
    display: flex;
    flex-direction: column;
`

export const CalendarHeader = styled.div`
    height: 113px;
    padding: 32px 32px 0 32px;
    border-bottom: 0.5px solid rgba(153, 153, 153, 1);
    background: rgba(255, 255, 255, 1);
    position: sticky;
    top: 0;
    z-index: 10;
    flex-shrink: 0;

    @media screen and (max-width: 1024px) {
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
    color: rgba(0, 0, 0, 1);
    margin-bottom: 24px;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const CalendarTitleMobile = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 16px;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: rgba(153, 153, 153, 1);
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
    background-color: rgba(153, 153, 153, 1);
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
    color: rgba(153, 153, 153, 1);
    margin-left: 6px;
`

export const CalendarTitleMob = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
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
    color: rgba(153, 153, 153, 1);
`

export const CalendarScrollable = styled.div`
    flex: 1;
    overflow-y: auto;

    /* Стилизация скроллбара */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 1);
    }

    &::-webkit-scrollbar-thumb {
        width: 6px;
        height: 100px;
        background: rgba(217, 217, 217, 1);
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
    color: rgba(0, 0, 0, 1);
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
    background: rgba(244, 245, 246, 1);
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: all 0.2s ease;
    
    /* Пустые ячейки - полностью невидимые */
    &.empty {
        background: transparent;
        border: none;
        cursor: default;
        visibility: hidden; /* ← КЛЮЧЕВОЕ ИЗМЕНЕНИЕ */
    }

    &.disabled {
        opacity: 0.3;
        cursor: default;
    }

    /* При наведении */
    &:not(.empty):not(.disabled):not(.selected):hover {
        background: rgba(241, 235, 253, 1);
        color: rgba(115, 52, 234, 1);
    }

    /* Активная дата */
    &.selected {
        background: rgba(241, 235, 253, 1);
        color: rgba(115, 52, 234, 1);
        font-weight: 600;
    }

    /* Сегодня — только жирный текст, без фона */
    &.current {
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
    }
`

export const CalendarFooter = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        display: flex;
        width: 100%;
        height: 87px;
        opacity: 1;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
        padding: 0 16px;
        align-items: center;
    }
`

export const CalendarBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 39px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    background: rgba(115, 52, 234, 1);
    color: rgba(255, 255, 255, 1);
    border-radius: 6px;
    border: none;
`
