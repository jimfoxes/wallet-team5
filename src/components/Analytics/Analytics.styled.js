import styled from 'styled-components'

export const AnalyticsContainer = styled.div`
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
    padding-top: 100px; // 64px(высота header) + 36px(отступ заголовка сверху по макету)
    padding-bottom: 80px;
    background-color: rgba(244, 245, 246, 1);
    box-sizing: border-box;

    @media (max-width: 430px) {
        padding-left: 16px;
        padding-right: 16px;
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

    @media (max-width: 1024px) {
        text-align: center;
    }

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

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
    }
`

export const CalendarColumn = styled.div`
    display: flex;
    column-gap: 32px;
    width: 379px;
    height: 540px;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 1);
    padding-bottom: 24px;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        justify-content: center;
    }
`

export const ContentContainer = styled.div`
    height: 540px;
    flex-grow: 1;
`
