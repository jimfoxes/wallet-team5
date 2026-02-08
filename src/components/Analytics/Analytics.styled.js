import styled from 'styled-components'

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

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #2ecc71);
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
