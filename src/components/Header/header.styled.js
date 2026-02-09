import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 1000;
`

export const Logo = styled.div`
    cursor: pointer;
`

export const Nav = styled.nav`
    display: flex;
    gap: 48px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #222;
    font-weight: 400;
    position: relative;

    &.active {
        color: #20bf6b;
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 1px;
    }

    &:hover {
        color: #20bf6b;
    }
`

export const LogoutButton = styled.button`
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    outline: none;

    &:hover {
        color: #20bf6b;
        border: none;
    }
`
