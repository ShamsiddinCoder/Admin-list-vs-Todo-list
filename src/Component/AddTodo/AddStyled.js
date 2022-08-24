import styled from "styled-components";

export const Todo = styled.div`
    width: 26rem;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    border: solid 1px #ccc;
    position: fixed;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: .8rem;
    box-shadow: 0 8px 8px rgba(0,0,0,.28);
    transition: .8s ease;
    background: #fff;
    z-index: 10;
`

export const AddName = styled.input`
    outline: none;
    border: solid 1px #ccc;
    padding: .6rem;
    font-size: .8rem;
    font-family: sans-serif;
    margin-bottom: 1.2rem;
    border-radius: .4rem;
`

export const AddEmail = styled.input`
    outline: none;
    border: solid 1px #ccc;
    padding: .6rem;
    margin-bottom: 1.2rem;
    border-radius: .4rem;
    font-size: .8rem;
    font-family: sans-serif;
`

export const AddPhonenumber = styled.input`
    outline: none;
    border: 1px solid #ccc;
    padding: .6rem;
    margin-bottom: 1.2rem;
    border-radius: .4rem;
`

export const AddSubmit = styled.button`
    width: 100%;
    padding: .6rem;
    font-size: 1.4rem;
    outline: none;
    border: solid 1px #ccc;
    cursor: pointer;
    border-radius: .4rem;
    transition: .6s ease;

    &:hover {
        letter-spacing: .6rem;
    }
`

export const Gender = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
`

export const Man = styled.input`
    margin: 0 3rem 0 0;   
    cursor: pointer;
`

export const Woman = styled.input`
    margin: 0;
    cursor: pointer;
`

export const Label = styled.label`
    font-family: sans-serif;
    margin: 0 .6rem 0 0;
    cursor: pointer;
    event-target: none;
`