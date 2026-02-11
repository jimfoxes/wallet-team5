import styled from 'styled-components'

Верстка-календаря-на-странице-Анализов-без-логики
export const AnalyticsContainer = styled.div`
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
    padding-top: 36px;
    padding-bottom: 80px;
    background-color: rgba(244, 245, 246, 1);
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

    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`

export const ColumnsLayout = styled.div`
    display: flex;
    column-gap: 32px;
    margin-top: 32px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
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

export const BodyContainer = styled.div`
    padding-left: 120px;
    padding-right: 120px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`
export const AnalyticsTitle = styled.h1`
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: Bold;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: left;
    padding-top: 36px;
main

    @media screen and (max-width: 1024px) {
        margin-bottom: 32px;
        border-radius: 0;
        height: 646px;
    }
    @media (max-width: 768px) {
        width: 226px;
        height: 29px;
        padding-top: 24px;
        color: rgba(0, 0, 0, 1);
        font-family: Montserrat;
        font-style: Bold;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const ContentContainer = styled.div`
    padding-top: 32px;
`
