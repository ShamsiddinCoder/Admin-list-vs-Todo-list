import React, {useContext, useState} from 'react'
import {
    AddListsTodos,
    ReloadInput,
    Actions
} from './AddListsTodoStyled';
import {Context} from '../../../Hoci/Context';

export default function AddListsTodo({id, name, email, phoneNumber, gender, read}) {
  const {addDispatch} = useContext(Context);

  const changesTodo = (items, id) => {
    addDispatch({
      type: 'chengeNames',
      values: items.target.value,
      name: items.target.name,
      id: id
    })
  };
 
  return (
    <AddListsTodos id={id} onChange={(items) => changesTodo(items, id)}>
        
        <ReloadInput type='text' readOnly={read} value={name}
          style={{
            borderBottom: read ? '' : 'solid 1px #ccc'
          }}
          required="required"
          name='name'
        />
        <ReloadInput type='text' value={email} readOnly={read} 
          style={{
            borderBottom: read ? '' : 'solid 1px #ccc'
          }}
          required="required"
          name='email'
        />
        <ReloadInput type={read ? 'text' : 'number'} value={phoneNumber} readOnly={read} 
          style={{
            borderBottom: read ? '' : 'solid 1px #ccc'
          }}
          required="required"
          name='phoneNumber'
        />
        <ReloadInput type='text' value={gender} readOnly={read} 
          style={{
            borderBottom: read ? '' : 'solid 1px #ccc'
          }}
          required="required"
          name='gender'
        />
        <Actions>
            <i className='bx bxs-pencil' onClick={() => {
                                                    // changesTodo(id);
                                                    addDispatch({
                                                      type: 'change',
                                                      id: id
                                                    })
                                                  }}></i>
            <i className='bx bx-x' onClick={() => addDispatch({
                                              type: 'remove',
                                              id: id
                                            })}></i>
        </Actions>
    </AddListsTodos>
  );
};
