import React, {useContext} from 'react';
import {Todo, 
        AddName, 
        AddEmail, 
        AddPhonenumber, 
        AddSubmit,
        Gender,
        Man,
        Woman,
        Label
} from './AddStyled';
import {Context} from '../Hoci/Context';

export default function AddTodo() {
    const {addTodoActive, addTodo, dispatch, state, addDispatch, addReduc} = useContext(Context);

  return (
    <Todo 
        style={{
            top: addTodo ? '50%' : '-100%'
    }}>
        <AddName type="text" id='name' placeholder='Add Name' onChange={(e) => dispatch({
                                                                        type: 'name',
                                                                        names: e.target.value
                                                                    })}/>
        <AddEmail type="email" id='email' placeholder='Add Email' onChange={(em) => dispatch({
                                                                                type: 'email',
                                                                                email: em.target.value
                                                                            })}
                                                    />
        <AddPhonenumber type="number" placeholder='Add Phone number' id='phoneNumber' onChange={(ch) => dispatch({
                                                                                                type: 'phoneNumber',
                                                                                                phoneNumber: ch.target.value
                                                                                            })}/>
        <Gender id='gender' onChange={(gen) => dispatch({
                                        type: 'gender',
                                        gender: gen.target.id
                                    })}>
            <Label htmlFor='man'>Man</Label>
            <Man type='radio' name='gender' id='man' />
            <Label htmlFor='woman'>Woman</Label>
            <Woman type='radio' name='gender' id='woman' />
        </Gender>
        <AddSubmit onClick={() => {
            addTodoActive();
            addDispatch({
                type: 'add',
                state: state,
                id: addReduc.length
            })
        }}>Add</AddSubmit>
    </Todo>
  )
}
