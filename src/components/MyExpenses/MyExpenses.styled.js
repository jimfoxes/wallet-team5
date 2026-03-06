import styled from 'styled-components'

const COLORS = {
    bgGray: 'rgba(244, 245, 246, 1)',
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
    primary: 'rgba(115, 52, 234, 1)',
    primaryDark: 'rgb(81, 0, 231)',
}

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
    width: 100%;
    padding-top: 32px;
    padding-bottom: 80px;
    background-color: ${COLORS.bgGray};
    box-sizing: border-box;

    @media (max-width: 1160px) {
        padding-right: calc(50% - 394px);
        padding-left: calc(50% - 395px);
    }

    @media (max-width: 768px) {
        padding-top: 24px;
        padding-bottom: 0px;
        height: 700px;
        background-color: rgba(255, 255, 255, 1);
        max-width: 100%;
        margin: 0;
    }
`

export const PageTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0 16px 24px;
    }
`

export const PageTitle = styled.h1`
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    color: ${COLORS.black};
    line-height: 150%;
    letter-spacing: 0px;
    text-align: left;
    margin-left: 0;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0px;
    }
`
export const MobileToExpensesFormButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        gap: 8px;
        border: none;
        cursor: pointer;
        background: none;
        align-items: center;

        & svg {
            width: 12px;
            height: 12px;
        }
    }
`
export const ToExpensesFormText = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
`

export const ColumnsLayout = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 32px;
    width: 100%;

    @media (max-width: 1160px) {
        flex-direction: column;
        align-items: stretch;
        & > * {
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (max-width: 768px) {
        margin-top: 0;

        & > * {
            margin-left: 0;
            margin-right: 0;
        }
    }
`

export const TableWrapper = styled.div`
    width: 789px;
    height: 618px;
    flex-shrink: 0;

    @media (max-width: 1160px) {
        width: 100%;
    }
`

export const FormWrapper = styled.div`
    width: 379px;
    height: 618px;
    text-align: left;
    flex-shrink: 0;

    & > * {
        width: 100%;
        height: 100%;
        padding: 32px;
        box-sizing: border-box;
        border-radius: 30px;
        box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
        background: #fff;
    }

    @media (max-width: 1160px) {
        width: 100%;
        max-width: 379px;

        & > * {
            height: auto;
            min-height: 618px;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 16px;

        & > * {
            padding: 0px;
            border-radius: none;
            box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
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
export const DesktopOnly = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

export const MobileOnly = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`
export const MobileBackButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 16px;
        margin-bottom: 12px;
        background: none;
        border: none;
        cursor: pointer;
    }
`
export const BackArrow = styled.span`
    width: 16px;
    height: 16px;
    background: rgba(153, 153, 153, 1);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 12px;
    line-height: 1;

    &::after {
        content: '←';
    }
`
export const BackText = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: rgba(153, 153, 153, 1);
`
