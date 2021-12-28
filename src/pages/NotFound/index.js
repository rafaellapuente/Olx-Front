import React from "react";
import { Link } from "react-router-dom";
import { Title, Container, SubTitle, Button } from "./styled";

const Page = ()=>{
    return (
        <Container>
            <Title>ERRO 404</Title>
            <SubTitle>Infelizmente não conseguimos encontrar a página!</SubTitle>
            <Link to='/'>
                <Button>HOME</Button>
            </Link>
        </Container>
    )
}

export default Page