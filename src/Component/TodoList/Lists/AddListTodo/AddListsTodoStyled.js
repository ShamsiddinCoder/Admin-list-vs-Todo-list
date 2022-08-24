import styled from "styled-components";

export const AddListsTodos = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:not(:last-child){
        border-bottom: 2px solid #000;
    }
`

export const ReloadInput = styled.input`
    font-family: sans-serif;
    font-size: 1rem;
    outline: none;
    border: none;
    width: 18%;
    text-align: center;
`

export const Actions = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 1.6rem;
        cursor: pointer;

        &:first-child{
            background: #bbd8fb;
            padding: .4rem;
            border-radius: .4rem;
            color: #00469b;
            margin-right: .6rem;
        }

        &:nth-child(2){
            font-size: 1.8rem;
            background: #eba4a4;
            color: #7c0000;
            padding: .3rem;
            border-radius: .4rem;
        }
    }
`