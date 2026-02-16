import styled from 'styled-components'

export const PageContainer = styled.div`
    min-height: 100vh;
    background: rgba(244, 245, 246, 1);
    position: relative;
    padding-bottom: 80px;
    box-sizing: border-box;

    @media (max-width: 1366px) {
        padding-left: 60px;
        padding-right: 60px;
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 768px) {
        padding-bottom: 40px;
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const PageTitle = styled.h1`
    position: absolute;
    top: 100px;
    left: 120px;
    width: 233px;
    height: 48px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    color: rgba(0, 0, 0, 1);
    margin: 0;
    z-index: 2;

    @media (max-width: 1366px) {
        left: 60px;
    }

    @media (max-width: 1200px) {
        position: static;
        width: auto;
        height: auto;
        text-align: center;
        padding-top: 100px;
        margin-bottom: 32px;
    }

    @media (max-width: 768px) {
        padding-top: 64px;
        font-size: 24px;
        line-height: 29px;
    }
`

export const TableWrapper = styled.div`
    position: absolute;
    top: 180px;
    left: 118px;
    width: 789px;
    height: 618px;
    z-index: 1;

    @media (max-width: 1366px) {
        left: 60px;
        width: 689px;
    }

    @media (max-width: 1200px) {
        position: static;
        width: 100%;
        max-width: 789px;
        height: auto;
        min-height: 618px;
        margin: 0 auto 40px auto;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-height: 500px;
        padding: 0;
    }
`

export const FormWrapper = styled.div`
    position: absolute;
    top: 180px;
    left: 941px;
    width: 379px;
    height: 618px;
    z-index: 1;
    text-align: left;

    & > * {
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
        padding: 32px !important;
        box-sizing: border-box !important;
        border-radius: 30px !important;
        box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13) !important;
        background: #fff !important;
        display: flex !important;
        flex-direction: column !important;
    }

    @media (max-width: 1366px) {
        left: 789px;
    }

    @media (max-width: 1200px) {
        position: static;
        width: 100%;
        max-width: 379px;
        height: auto;
        margin: 0 auto;

        & > * {
            height: auto !important;
            min-height: 618px;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0;

        & > * {
            padding: 24px !important;
            border-radius: 20px !important;
            min-height: auto;
        }
    }
`

export const ErrorMessage = styled.div`
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffebee;
    color: #c62828;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const LoadingText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 16px;
    color: #666;
`
