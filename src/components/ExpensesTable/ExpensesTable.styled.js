import styled from 'styled-components'

const COLORS = {
    bgGray: 'rgba(244, 245, 246, 1)',
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
    primary: 'rgba(115, 52, 234, 1)',
    primaryDark: 'rgb(81, 0, 231)',
}

export const TableContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 768px) {
        border-radius: 20px;
    }
`

export const TableHeaderBorderContainer = styled.div`
    border-bottom: 0.5px solid rgba(153, 153, 153, 1);
    margin-bottom: 12px;
`

export const TableTitle = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: rgba(0, 0, 0, 1);
    margin: 32px 0 32px 32px;
    padding: 0;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        margin: 24px 0 12px 20px;
    }
`

export const TableHeader = styled.div`
    padding: 0 32px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`

export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 141fr 141fr 142fr 158fr 12fr;
    gap: 32px;
    padding-bottom: 6px;

    @media (max-width: 768px) {
        grid-template-columns: 74fr 74fr 73fr 74fr;
        gap: 16px;
    }
`

export const HeaderCell = styled.div`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(153, 153, 153, 1);
    text-align: left;

    @media (max-width: 768px) {
        &:nth-child(3) {
            text-align: right;
        }

        &:nth-child(4) {
            text-align: right;
        }
    }
`

export const TableBody = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 32px 32px 32px;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 1);
    }

    &::-webkit-scrollbar-thumb {
        width: 6px;
        background: rgba(217, 217, 217, 1);
        border-radius: 30px;
    }

    &::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        padding: 0 20px 24px 20px;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 141fr 141fr 142fr 158fr 12fr;
    gap: 32px;
    align-items: center;
    margin-bottom: 14px;

    @media (max-width: 768px) {
        grid-template-columns: 74fr 74fr 73fr 74fr;
        gap: 16px;
    }
`

export const Cell = styled.div`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 10px;
        line-height: 15px;

        &:nth-child(3) {
            text-align: right;
        }

        &:nth-child(4) {
            text-align: right;
        }
    }
`

export const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s;
    margin-left: auto;

    svg {
        width: 12px;
        height: 12px;
        color: #999;
        transition: color 0.2s;
    }

    &:hover {
        background-color: rgba(255, 80, 80, 0.1);
    }

    &:hover svg {
        color: #ff5050;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const EmptyMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: #999;
    font-size: 14px;
`
// --- Контейнер с Кнопкой "Выбрать другой период" ---
export const DelMobButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 343px;
        height: 39px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background: ${COLORS.primary};
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: ${COLORS.white};
        font-family: Montserrat;
        font-style: SemiBold;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;

        &:active {
            background: ${COLORS.primaryDark};
        }
    }
`

// --- Кнопка "Выбрать другой период" ---
export const DelMobButtonContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 87px;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
        z-index: 1000;
        padding: 0;
        margin: 0;
    }
`
