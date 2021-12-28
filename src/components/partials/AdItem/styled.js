import styled from "styled-components";

export const Item = styled.div`

    a{
        display:block;
        border:1px solid #FFF;
        margin:10px;
        text-decoration:none;
        padding:10px;
        border-radius:5px;
        color:#000;
        background-color:#FFF;
        transition:all ease .4s;
        box-shadow:0px 0px 5px #999;

        &:hover{
            background-color:#EEE;
            border-color:#CCC:
        }

        .itemImage img{
            width:100%;
            border-radius:5px;
        }

        .itemName{
            font-weight:bold;
        }
    }
`