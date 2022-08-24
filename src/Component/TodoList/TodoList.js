import React, {useContext} from 'react';
import { Container } from './TosoStyled';
import Search from './Search/Search';
import Lists from './Lists/Lists';
import AddListsTodo from './Lists/AddListTodo/AddListsTodo';
import {Context} from '../Hoci/Context';

export default function TodoList() {
  const {addReduc} = useContext(Context);

  return (
    <Container>
        <Search />
        <Lists />
        {addReduc.map(items => <AddListsTodo key={items.id} {...items}/>)}
    </Container>
  )
}
