import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
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
    @media (max-width: 1200px) {
        height: 54px;
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
`
