import React, {useContext} from 'react';
import {Background} from './BackStyled';
import {Context} from '../Hoci/Context';

export default function Back() {
    const {addTodoActive, addTodo} = useContext(Context);

  return (
    <Background 
        onClick={addTodoActive}
        style={{display: addTodo ? 'block' : 'none'}} />
  )
}
