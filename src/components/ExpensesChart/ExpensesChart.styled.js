import styled from 'styled-components'

export const ChartContainer = styled.div`
    width: 100%;
    max-width: 789px;
    padding: 32px 32px 44px 32px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: var(--Skyeng b2b / White, rgba(255, 255, 255, 1));
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
`
export const SelectedPeriodContainer = styled.div`
    width: 268px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding-top: 12px;
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
`
export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
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
