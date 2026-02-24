import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Wrapper,
    Logo,
    Nav,
    StyledLink,
    LogoutButton,
    MobileDropdown,
    DropdownHeader,
    DropdownMenu,
    DropdownItem,
    DropdownArrow,
    DropdownLabel,
    MobileRight,
    MobileLogout,
} from './header.styled.js'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userName')
        window.location.replace('/sign-in')
    }

    const desktopPages = [
        { label: 'Мои расходы', path: '/expenses' },
        { label: 'Анализ расходов', path: '/analytics' },
    ]

    const mobilePages = [
        { label: 'Мои расходы', path: '/expenses' },
        { label: 'Новый расход', path: '/new-expense' },
        { label: 'Анализ расходов', path: '/analytics' },
    ]

    const currentPage =
        mobilePages.find((page) => page.path === location.pathname) ||
        mobilePages[0]

    const handleSelect = (path) => {
        navigate(path)
        setOpen(false)
    }

    return (
        <Wrapper>
            <Logo onClick={() => navigate('/')}>
                <img
                    src="/header-logo.svg"
                    alt="Skypro Wallet"
                    width={150}
                    height={40}
                />
            </Logo>

            {/* Десктоп */}
            <Nav>
                {desktopPages.map((page) => (
                    <StyledLink key={page.path} to={page.path}>
                        {page.label}
                    </StyledLink>
                ))}
            </Nav>
            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
            {/* Мобилка */}
            <MobileRight>
                <MobileDropdown>
                    <DropdownHeader onClick={() => setOpen(!open)}>
                        <DropdownLabel>{currentPage.label}</DropdownLabel>
                        <DropdownArrow />
                    </DropdownHeader>

                    {open && (
                        <DropdownMenu>
                            {mobilePages.map((page) => (
                                <DropdownItem
                                    key={page.path}
                                    $active={location.pathname === page.path}
                                    onClick={() => handleSelect(page.path)}
                                >
                                    {page.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    )}
                </MobileDropdown>

                <MobileLogout onClick={handleLogout}>Выйти</MobileLogout>
            </MobileRight>
        </Wrapper>
    )
}
