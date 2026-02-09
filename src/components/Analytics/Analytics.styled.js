import styled from 'styled-components'

export const analyticsTitle = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 100px;
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: #2c3e50;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #2ecc71);
    }
`
