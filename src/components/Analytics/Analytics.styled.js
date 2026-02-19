import styled from 'styled-components'

export const AnalyticsContainer = styled.div`
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
    padding-top: 100px;
    padding-bottom: 80px;
    background-color: rgba(244, 245, 246, 1);
    box-sizing: border-box;

    @media (max-width: 430px) {
        padding-bottom: 0px;
        height: 700px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: rgba(255, 255, 255, 1);
    }
`

export const AnalyticsTitle = styled.h1`
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    color: rgba(0, 0, 0, 1);
    line-height: 150%;
    letter-spacing: 0px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0px;
    }
`

export const ColumnsLayout = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        margin-top: 24px;
    }
`

// --- Календарь — на десктопе всегда виден, на мобильных — только при нужном view ---
export const CalendarColumn = styled.div`
    display: ${(props) =>
        props.$visibleOnDesktop ? 'flex' : props.$isVisible ? 'flex' : 'none'};
    flex-direction: column;
    width: 379px;
    height: 540px;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 1);
    padding-bottom: 24px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 379px;
        border-radius: 0;
        box-shadow: none;
        justify-content: center;
        height: auto;
        min-height: 100vh;
        padding-bottom: 87px;
        display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
    }
`

// --- Контейнер для диаграммы ---
export const ContentContainer = styled.div`
    flex-grow: 1;

    @media (max-width: 768px) {
        height: auto;
        min-height: calc(100vh - 200px);
        width: 100%;
        display: ${(props) => (props.$show ? 'flex' : 'none')};
        flex-direction: column;
        align-items: center;
    }
`

// --- Кнопка "Выбрать другой период" ---
export const CalendarButtonContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 87px;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
        z-index: 1000;
        padding: 0;
        margin: 0;
    }
`

export const CalendarButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 343px;
        height: 39px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background: rgba(115, 52, 234, 1);
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: rgba(255, 255, 255, 1);
        font-family: Montserrat;
        font-style: SemiBold;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;

        &:active {
            background: rgb(81, 0, 231);
        }
    }
`
