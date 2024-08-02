import styled from "styled-components";

export const StyledClock = styled.div`
     display: flex;
    justify-content: flex-end;
    margin: 10px;
    padding: 5px;
    font-family: "Inconsolata", monospace;
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadows};
`;