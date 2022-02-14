import { Button, Row } from "react-bootstrap";
import styled from "styled-components";


export const ContForm = styled.div`
    width: 45%;
    background-color: white ;
    margin: 10px auto;
    padding: 10px 40px;
    border-radius: 4px;
    height: 90vh;
`

export const ButtonStyled = styled(Button)`
    background-color: #393737;
    border: none;
    width: 50%;
    font-size: 15px;
    display: block;
    margin: 10px auto 0px;
    text-align: center;
    &:hover{
        background-color: #EB82A5;
        color:#4D4C4D;
    }
    &:focus{
        outline: none;
        background-color: #EB82A5;
    }
`

export const SpanCard = styled.span`
    font-size: 17px;
    font-weight: 400;
    
`

export const RowCard = styled(Row)`
    margin: 15px 25px;
`