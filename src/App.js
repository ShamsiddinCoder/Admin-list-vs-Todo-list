import React, {useState, useReducer, useEffect} from "react";
import {Context} from './Component/Hoci/Context';
import AddTodos from './Component/AddTodo/AddTodo';
import TodoList from './Component/TodoList/TodoList';
import Back from './Component/Back/Back';
import reducer from './Component/Hoci/Reducer';
import AddReducer from "./Component/Hoci/AddReducer";

function App() {
  const [addTodo, setAddTodo] = useState(false);

  const addTitles = {
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    
  }
  const [state, dispatch] = useReducer(reducer, addTitles);
  const [addReduc, addDispatch] = useReducer(AddReducer, JSON.parse(localStorage.getItem('addReduc')) || []);

  const addTodoActive = () => {
    setAddTodo(todos => todos = !todos);
  };

  useEffect(() => {
    localStorage.setItem('addReduc', JSON.stringify(addReduc));
  }, [addReduc]);
  
  return (
    <Context.Provider value={{
      addTodoActive,
      addTodo,
      dispatch,
      state,
      addDispatch,
      addReduc
    }}>
      <AddTodos />
      <TodoList />
      <Back />
    </Context.Provider>
  );
}

export default App;
