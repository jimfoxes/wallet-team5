import styled from 'styled-components'

export const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px 32px 44px 32px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: rgba(255, 255, 255, 1);

    @media (max-width: 768px) {
        width: 342px;
        padding: 0;
        max-width: none;
        box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0);
        padding-top: 16px;
    }
`
export const TotalAmount = styled.p`
    width: 268px;
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: Bold;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;

    @media (max-width: 768px) {
        width: 268px;
        height: 24px;
        color: rgba(0, 0, 0, 1);
        font-family: Montserrat;
        font-style: Bold;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
    }
`
export const Chart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 387px;
    border-radius: 8px;
    align-items: flex-end;
    overflow: visible;
    gap: 32px;
    padding-top: 18px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        gap: 6px;
        width: 342px;
    }
`
export const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    position: relative;
    justify-content: flex-end;
    height: 100%;
    gap: 12px;
    padding-top: 12px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`
export const Bar = styled.div`
    width: 94px;
    height: ${(props) => props.$height}%;
    background: ${(props) => props.$color || '#ccc'};
    border-radius: 12px;
    transition: height 0.3s ease;
    min-height: 4px;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        width: 52px;
        border-radius: 6px;
    }
`
export const BarLabel = styled.p`
    width: 94px;
    height: 15px;
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        width: 52px;
        height: 12px;
        color: rgba(0, 0, 0, 1);
        font-family: Montserrat;
        font-style: Regular;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const SelectedPeriod = styled.p`
    height: 15px;
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    text-align: center;
    margin-bottom: 12px;
`
export const BarValueAbove = styled.p`
    width: 94px;
    height: 20px;
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: SemiBold;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        width: 52px;
        height: 12px;
        color: rgba(0, 0, 0, 1);
        font-family: Montserrat;
        font-style: SemiBold;
        font-size: 10px;
        font-weight: 600;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const SelectedPeriodContainer = styled.div`
    width: 268px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding-top: 12px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`
export const PrefixText = styled.span`
    width: 70px;
    height: 15px;
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        width: 70px;
        height: 15px;
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-style: Regular;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    @media (max-width: 768px) {
    }
`
export const DateText = styled.span`
    height: 15px;
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: SemiBold;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        height: 15px;
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-style: SemiBold;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const SeparatorText = styled.span`
    height: 15px;
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;

    @media (max-width: 768px) {
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-style: Regular;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;
    }
`
export const NoDataText = styled.span`
    height: 15px;
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: SemiBold;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
`
export const CalendarButtonContainer = styled.div`
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
export const CalendarButton = styled.button`
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
        background: rgba(115, 52, 234, 1);
        gap: 12;
        padding: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: rgba(255, 255, 255, 1);
        font-family: Montserrat;
        font-style: SemiBold;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: center;

        &:active {
            background: rgb(81, 0, 231);
        }
    }
`
