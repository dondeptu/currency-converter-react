import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

export const Grid = styled.label`
    display: grid;
    grid-template-columns: 80px minmax(100px, 300px);
    align-items: center;
    gap: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: minmax(10px, 210px);
        gap: 5px;
    }
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadows};
`;

export const Legend = styled.legend`
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.orange};
    padding: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const Field = styled.select`
    border: 1px solid ${({ theme }) => theme.colors.orange};
    padding: 10px;
    border-radius: 3px;

    &:active {
        border-color: ${({ theme }) => theme.colors.maiTai};
    } 

    &:focus {
        border-color: ${({ theme }) => theme.colors.maiTai};
    }
`;

export const FieldSelect = styled(Field)`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
    flex: 0 1 390px;
    align-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 700;
    transition: background-color 0.4s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.maiTaiLight};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.maiTaiLighter};
    }
`;

export const LoadingStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 10px;
    padding: 50px 10px;
    color: ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadows};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    
`;

export const ErrorStatus = styled.div`
    background-color: red;
`;