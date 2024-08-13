import styled, { css } from "styled-components";

export const Square = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.orange};
    transition: transform 0.5s linear;

    ${({ $rotation }) => $rotation && css`
        transform: rotate(${$rotation}deg);
    `}
`;