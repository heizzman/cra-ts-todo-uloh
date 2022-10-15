import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Input, Button } from '../common';
import { TodoContext } from '../Providers/TodoContext';
import { APP_USERID } from '../utils/consts'

const AddTodo: React.FC = (): JSX.Element => {

  const { addTodo } = useContext(TodoContext) as ContextType;
  const [inputValue, setInputValue] = useState('');
  
  const addTodoOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;

    const newTodo = { userId: APP_USERID, id: uuid(), title: inputValue, completed: false };
    addTodo(newTodo);
    setInputValue('');
  };

  return (
    <form onSubmit={addTodoOnSubmit}>
      <Input
        type='text'
        placeholder='Add todo..'
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        autoFocus
      />
      <Button disabled={!inputValue}>Add</Button>
    </form>
  );
};

export default AddTodo;
