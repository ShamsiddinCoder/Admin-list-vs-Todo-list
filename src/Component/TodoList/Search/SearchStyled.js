import styled from "styled-components";

export const Seaching = styled.div`
    padding: .4rem;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SearchngInput = styled.input`
    width: 70%;
    outline: none;
    border: solid 1px #ccc;
    border-radius: .4rem;
    padding: .4rem .4rem .4rem 4rem; 
    font-size: 1.3rem;
`

export const AddSubmit = styled.button`
    width: 18%;
    outline: none;
    padding: .4rem;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: .4rem;
    border: none;
    transition: .4s ease;

    &:hover {
        letter-spacing: .6rem;
    }
`