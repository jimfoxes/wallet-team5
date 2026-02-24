import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 1000;
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 0 16px;
        background: rgba(244, 245, 246, 1);
        height: 54px;
    }
`

export const Logo = styled.div`
    cursor: pointer;
    img {
        width: 150px;
        height: 40px;

        @media (max-width: 768px) {
            width: 109px;
            height: 14px;
        }
    }
`

/* ---------- ДЕСКТОП ---------- */

export const Nav = styled.nav`
    display: flex;
    gap: 48px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #222;
    font-weight: 400;

    &.active {
        font-weight: 600;
        color: #7334ea !important;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    &:hover {
        color: #7334ea !important;
    }
`

/* ---------- МОБИЛКА ---------- */
export const MobileRight = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        margin-left: auto;
        gap: 20px;
    }
`

export const MobileDropdown = styled.div`
    display: none;
    position: relative;

    @media (max-width: 768px) {
        display: block;
    }
`
export const MobileLogout = styled.button`
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
`

export const DropdownHeader = styled.div`
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
    color: #7334ea;

    display: flex;
    align-items: center;
    gap: 8px;
`
export const DropdownLabel = styled.span`
    text-decoration: underline;
    text-underline-offset: 3px;
`
export const DropdownArrow = styled.span`
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #000;
    display: block;
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border: 0.5px solid rgba(153, 153, 153, 1);
    width: 138px;
    border-radius: 12px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 6px;
    z-index: 1000;
    align-items: flex-start;
`

export const DropdownItem = styled.div`
    padding: 7px 13px;
    border-radius: 24px;
    cursor: pointer;
    font-weight: 400;
    font-size: 10px;
    color: ${(props) => (props.$active ? '#7334EA' : '#000000')};
    background: ${(props) => (props.$active ? '#F1EBFD' : '#F4F5F6')};

    &:hover {
        background: #f4f0ff;
        color: #7334ea;
    }
`

export const LogoutButton = styled.button`
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;

    @media (max-width: 768px) {
        display: none;
    }

    &:hover {
        color: #7334ea;
    }
`
