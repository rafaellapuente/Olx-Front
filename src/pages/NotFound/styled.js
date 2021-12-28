import styled from "styled-components";

export const Container = styled.div`
    background-color:#FF8100;
    height:800px;
    margin:0;
    padding-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid #000;
`
export const Title = styled.h1`
    font-size:100px;
    margin:0;
`
export const SubTitle = styled.h2`
    font-size:50px;
    margin:0;
    margin-top:50px;
`
export const Button = styled.button`
    margin-top:200px;
    padding:15px 20px;
    font-size:50px;
    border-radius:60px;
    border:none;
    color:#FFF;
    background-color:#000;
    cursor:pointer;
    
    &:hover{
        background-color:#222;
        box-shadow:0px 0px 10px #555;
    }
`