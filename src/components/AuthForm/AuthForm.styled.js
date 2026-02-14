import styled from 'styled-components'

export const AuthWrapper = styled.div`
    min-height: 100vh;
    background: rgba(234, 238, 246, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        align-items: flex-start;
        padding-top: 64px;
        padding-left: 0;
        padding-right: 0;
    }
`
export const Modal = styled.div`
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 32px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: #fff;

    @media (max-width: 768px) {
        position: fixed;
        top: 64px;
        left: 0;
        width: 100vw;
        height: calc(100vh - 64px);
        border: none;
        box-shadow: none;
        border-radius: 0;
        background: #ffffff;
        padding: 0;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: stretch;
        gap: 24px;
        z-index: 999;
    }
`
export const Title = styled.h2`
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: Bold;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        padding-top: 151px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`
export const InputWrapper = styled.div`
    position: relative;
`
export const Input = styled.input`
    width: 313px;
    height: 39px;
    padding: 12px;
    box-sizing: border-box;
    border: 0.5px solid rgba(153, 153, 153, 1);
    border-radius: 6px;
    background: #fff;
    font-size: 14px;

    &:focus {
        outline: none;
    }

    /* Успех */
    ${({ $success, $error }) =>
        $success &&
        !$error &&
        `
        background: #f0e6ff;
        border-color: #565eef;
        &::placeholder {
            color: #565eef;
        }
    `}

    /* Ошибка */
    ${({ $error }) =>
        $error &&
        `
        background: rgba(255, 235, 235, 1);
        border: 1px solid rgba(242, 80, 80, 1) !important;
        color: #000000;
        &::placeholder {
            color: #d32f2f;
        }
    `}

    /* Фокус при ошибке */
    &:focus {
        ${({ $error }) =>
            $error &&
            `border-color: #b71c1c; box-shadow: 0 0 0 2px rgba(211, 47, 47, 0.2);`}
        ${({ $success, $error }) =>
            $success &&
            !$error &&
            `border-color: #565eef; box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);`}
    }

    &::placeholder {
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-style: Regular;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: left;
    }

    @media (max-width: 768px) {
        width: calc(100% - 32px);
        margin-left: 16px;
        margin-right: 16px;
        font-size: 14px;
        padding: 12px;
        height: 39px;
    }
`
export const ErrorText = styled.p`
    margin: 4px 0 0 16px;
    color: #d32f2f;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;

    &::before {
        content: '*';
        color: #d32f2f;
        margin-right: 4px;
    }

    @media (max-width: 768px) {
        margin-left: 32px;
        font-size: 13px;
    }
`
export const Button = styled.button`
    width: 313px;
    height: 39px;
    margin-top: 12px;
    border-radius: 6px;
    background: rgba(115, 52, 234, 1);
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    font-style: SemiBold;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: rgb(96, 26, 228);
    }

    &:active {
        background: rgb(80, 0, 230);
    }

    &:disabled {
        background: #cccccc;
        color: #666666;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        width: calc(100% - 32px);
        margin-left: 16px;
        margin-right: 16px;
        font-size: 14px;
        height: 44px;
        padding: 0 16px;
    }
`
export const ErrorMessage = styled.p`
    background: #fff;
    color: rgba(248, 77, 77, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    border-radius: 4px;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
    transition: all 0.2s ease;
    pointer-events: none;

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 10px 0 14px;
    }
`
export const LinkText = styled.p`
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 140%;
    }
`
export const Link = styled.a`
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
export const LinkTextUp = styled.p`
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
`
export const LinkUp = styled.a`
    color: #565eef;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
