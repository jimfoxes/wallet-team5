import styled from 'styled-components'

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: rgba(0, 0, 0, 1);
    margin: 0 0 8px 0;
    padding: 0;
`

export const Label = styled.label`
    display: block;
    margin-top: 20px;
    margin-bottom: 8px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 1);

    &:first-of-type {
        margin-top: 16px;
    }
`

export const ErrorStar = styled.span`
    color: rgba(242, 80, 80, 1);
    margin-left: 4px;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 0.5px solid rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
    }

    &.valid {
        background-color: #f1ebfd;
        border-color: #7334ea;
    }

    &.error {
        background-color: #fddede;
        border-color: #c62828;
    }
`

export const CategoriesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 4px;
`

export const CategoryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    padding: 8.5px 20px;
    border-radius: 30px;
    border: none;
    background-color: ${({ selected }) => (selected ? '#F1EBFD' : '#f4f4f4')};
    color: ${({ selected }) => (selected ? '#7334EA' : '#222')};
    cursor: pointer;
    transition: all 0.2s;

    img {
        width: 14px;
        height: 14px;
        ${({ selected }) =>
            selected &&
            `
            filter: invert(32%) sepia(91%) saturate(7456%) hue-rotate(259deg) brightness(95%) contrast(97%);
        `}
    }

    &:hover {
        background-color: ${({ selected }) =>
            selected ? '#F1EBFD' : '#e0e0e0'};
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    border: none;
    cursor: pointer;
    margin-top: 32px;
    background-color: ${({ $allValid, $submitted }) =>
        $submitted && !$allValid
            ? 'rgba(153, 153, 153, 1)'
            : 'rgba(115, 52, 234, 1)'};
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ $allValid, $submitted }) =>
            $submitted && !$allValid
                ? 'rgba(133, 133, 133, 1)'
                : 'rgba(115, 52, 234, 1)'};
    }

    &:active {
        background-color: ${({ $allValid, $submitted }) =>
            $submitted && !$allValid
                ? 'rgba(113, 113, 113, 1)'
                : 'rgba(115, 52, 234, 1)'};
    }
`
