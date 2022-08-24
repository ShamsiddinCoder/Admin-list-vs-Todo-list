import React from 'react';
import {
    ListsNames,
    Text
} from './ListsStyled';

export default function Lists() {
  return (
    <ListsNames>
        <Text>Name</Text>
        <Text>Email</Text>
        <Text>PhoneNumber</Text>
        <Text>Gender</Text>
        <Text>Action</Text>
    </ListsNames>
  )
}
