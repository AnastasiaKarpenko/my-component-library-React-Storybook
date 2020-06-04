import styled from "styled-components";

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
    background-color: #7C90DB;
    border: none; 
    color: white;    
`;

export default PrimaryButton;

