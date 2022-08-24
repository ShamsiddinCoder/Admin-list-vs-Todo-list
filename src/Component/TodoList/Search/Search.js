import React, {useContext} from 'react';
import {
    Seaching,
    SearchngInput,
    AddSubmit
} from './SearchStyled';
import {Context} from '../../Hoci/Context';

export default function Search() {
  const {addTodoActive} = useContext(Context);

  return (
    <Seaching>
        <SearchngInput type='text' />
        <AddSubmit onClick={addTodoActive}>Add +</AddSubmit>
    </Seaching>
  )
}
