import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Wrapper,
    Logo,
    Nav,
    StyledLink,
    LogoutButton,
} from './header.styled.js'

export default function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Logo onClick={() => navigate('/')} tabIndex={0}>
                <img
                    src="/header-logo.svg"
                    alt="Skypro Wallet"
                    width={150}
                    height={40}
                />
            </Logo>

            <Nav>
                <StyledLink to="/expenses">Мои расходы</StyledLink>
                <StyledLink to="/analytics">Анализ расходов</StyledLink>
            </Nav>

            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
        </Wrapper>
    )
}
