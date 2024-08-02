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

    @media(max-witdh: 380px) {
        grid-template-columns: minmax(10px, 210px);
        gap: 5px;
    }
`;

export const Fieldset = styled.fieldset`
    background-color: hsl(198deg 35% 90% / 71%);
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px #cccccc;
`;

export const Legend = styled.legend`
    font-size: 20px;
    background-color: #d88f08;
    padding: 5px;
    border-radius: 5px;
    color: white;
`;

export const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const Field = styled.select`
    border: 1px solid #d88f08;
    padding: 10px;
    border-radius: 3px;

    &:active {
        border-color: #aa7106;
    } 

    &:focus {
        border-color: #aa7106;
    }
`;

export const FieldSelect = styled(Field)`
    background-color: white;
`;

export const Button = styled.button`
    margin: 30px;
    align-self: center;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: #d88f08;
    color: white;
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.4s;

    &:hover {
        background-color: #d88f08cc;
    }

    &:active {
        background-color: #d88f089f;
    }
`;