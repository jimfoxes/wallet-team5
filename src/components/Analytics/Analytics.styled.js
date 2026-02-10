import styled from 'styled-components'

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

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ChartColumn = styled.div`
    background: rgba(255, 255, 255, 1);
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    padding: 32px 32px 44px 32px;
`
