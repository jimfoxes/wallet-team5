import styled from 'styled-components'

export const ChartContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`

export const PeriodLabel = styled.span`
    font-size: 14px;
    color: #333;
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
`

export const ToggleButton = styled.button`
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: ${(props) => (props.$active ? '#565eef' : '#fff')};
    color: ${(props) => (props.$active ? '#fff' : '#333')};
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background: ${(props) => (props.$active ? '#4a52e0' : '#f5f5f5')};
    }
`

export const TotalAmount = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`

export const Chart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 300px;
    padding: 20px 0;
    background: #f9f9f9;
    border-radius: 8px;
    align-items: flex-end;
    overflow: visible;
`

export const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    position: relative;
    justify-content: flex-end;
    height: 100%;
    gap: 4px;
`

export const Bar = styled.div`
    width: 50px;
    height: ${(props) => props.$height}%;
    background: ${(props) => props.$color || '#ccc'};
    border-radius: 6px 6px 0 0;
    transition: height 0.3s ease;
    min-height: 2px;

    &:hover {
        opacity: 0.9;
    }
`

export const BarLabel = styled.p`
    margin-top: 8px;
    font-size: 12px;
    color: #555;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60px;
`

export const BarValue = styled.p`
    margin-top: 4px;
    font-size: 11px;
    color: #777;
    font-weight: 500;
`
// Добавьте в конец файла
export const CalendarPlaceholder = styled.div`
    text-align: center;
    padding: 12px;
    background: #f0f4f8;
    border-radius: 8px;
    color: #555;
    font-size: 14px;
    margin-bottom: 16px;
    border: 1px dashed #aaa;
`

export const SelectedPeriod = styled.p`
    font-size: 14px;
    color: #555;
    text-align: center;
    margin-bottom: 12px;
`

export const BarValueAbove = styled.p`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    color: #333;
    font-weight: 500;
    margin: 0 0 4px 0;
    white-space: nowrap;
`
