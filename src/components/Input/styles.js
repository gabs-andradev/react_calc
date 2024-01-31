import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        float: right;
        clear: both;

        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`
