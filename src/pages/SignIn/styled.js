import styled from "styled-components";

export const PageArea = styled.div `


    form{
        background-color:#FFF;
        border-radius:3px;
        padding:10px;
        box-shadow:0px 0px 3px #999;

        .area{
            display:flex;
            align-items:center;
            padding:10px;
            max-width:500px;

            .area--title{
                width:200px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;
            }
            .space{
                margin-left:64px;
            }
            .area--input{
                flex:1;

                input{
                    width:100%;
                    font-size:14px;
                    padding:5px;
                    border:1px solid #DDD;
                    border-radius:15px;
                    outline:0;
                    transition:all ease .4s;

                    &:focus{
                        border-color:#333;
                        color:#333;
                    }
                }

                .check{
                    width:auto;
                }

                button{
                    background-color:#0089FF;
                    border:none;
                    outline:none;
                    padding:7px 15px;
                    border-radius:20px;
                    color:#FFF;
                    font-size:15px;
                    cursor:pointer;
                    float:right;
                    transition:all ease .4s;

                    &:hover{
                        background-color:#006FCE;
                        box-shadow:0px 0px 5px #999;
                    }
                }
            }

        }
    }
`