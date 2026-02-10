import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
    @media (max-width: 768px) {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
    }
`

export const HeaderBlock = styled.div`
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);

    height: 64px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;

    @media (max-width: 768px) {
        font-size: 18px;
        justify-content: center;
    }
`
export const LogoutButton = styled.button`
    background: transparent;
    border: 1px solid #dc3545;
    color: #dc3545;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #dc3545;
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        padding: 10px 16px;
    }
`
