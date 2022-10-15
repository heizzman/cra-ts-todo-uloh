import React from "react";
import AddTodo from '../components/AddTodo';
import Todolist from '../components/Todolist';
import { TodoForm } from '../common';

const TodoPage: React.FC = () => {

  return (
    <React.Fragment>
      <TodoForm>
        <AddTodo />
        <Todolist />
      </TodoForm>
    </React.Fragment>
  )
}

export default TodoPage;
