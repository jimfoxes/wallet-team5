import styled from 'styled-components'

export const header = styled.header`
    width: 100%;
    background-color: #ffffff;
`

export const headerBlock = styled.div`
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
