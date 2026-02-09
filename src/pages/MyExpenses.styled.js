import styled from 'styled-components'

export const FormWrapper = styled.div`
    width: 379px;
    margin-top: 116px;
    margin-left: 941px;
    padding: 32px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
`

export const Label = styled.label`
    display: block;
    margin-top: 24px;
    margin-bottom: 8px;
    font-weight: 500;
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
    font-size: 12px;
    font-weight: 400;
    outline: none;

    &.valid {
        background-color: #dff6e4;
        border-color: #2e7d32;
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
`

export const CategoryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    padding: 8.5px 20px;
    border-radius: 30px;
    border: none;
    background-color: ${({ selected }) => (selected ? '#dff6e4' : '#f4f4f4')};
    color: ${({ selected }) => (selected ? '#2e7d32' : '#222')};
    cursor: pointer;
    transition:
        background-color 0.2s,
        color 0.2s;

    img {
        width: 14px;
        height: 14px;
        ${({ selected }) =>
            selected &&
            `
            filter: brightness(0) saturate(100%) invert(46%) sepia(80%) saturate(635%) hue-rotate(92deg) brightness(94%) contrast(91%);
        `}
    }

    &:disabled {
        background-color: #e0e0e0;
        color: #888;
        cursor: not-allowed;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 24px;
    background-color: ${({ $allValid, $submitted }) =>
        $submitted && !$allValid
            ? 'rgba(153, 153, 153, 1)'
            : 'rgba(31, 164, 108, 1)'};
    color: #fff;
    transition: background-color 0.2s;
`
