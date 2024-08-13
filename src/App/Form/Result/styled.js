import styled from "styled-components";

export const Wrapper = styled.p`
    display: flex;
    justify-content: center;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    padding: 15px;
    box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadows};
`;

export const OutAmount = styled.span`
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
`;