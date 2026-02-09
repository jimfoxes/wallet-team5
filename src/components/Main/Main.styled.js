import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const mainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 64px);
    padding: 20px;

    @media (max-width: 1200px) {
        min-height: calc(100vh - 54px);
    }
`

export const mainTitle = styled.h1`
    font-size: 3.5rem;
    color: #2c3e50;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const linksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
`

export const linkItem = styled(Link)`
    display: block;
    padding: 15px 0;
    font-size: 1.3rem;
    color: #3498db;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;

    &:hover {
        color: #2980b9;
        border-bottom: 1px solid #3498db;
        transform: translateX(10px);
    }
`
