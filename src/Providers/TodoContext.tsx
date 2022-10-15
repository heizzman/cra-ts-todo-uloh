import React, { useState, PropsWithChildren } from "react";
export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    const newTodo = {
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    };
    setTodos([...todos, newTodo]);
  };

  const delTodo = (todo: ITodo) => {
    setTodos(todos.filter((i) => (i.id !== todo.id && i.id !== todo.userId)));
  };

  const updComplTodo = (todo: ITodo) => {
    setTodos(todos.map(i => (i.id === todo.id && i.userId === todo.userId) ? { ...i, completed: !i.completed } : i))
  };

  const updTitleTodo = (todo: ITodo, editedInput: string) => {
    setTodos(todos.map(i => (i.id === todo.id && i.userId === todo.userId) ? { ...i, title: editedInput } : i))
  };

  return (<TodoContext.Provider value={{ todos, addTodo, delTodo, updComplTodo, updTitleTodo, setTodos }}>{children}</TodoContext.Provider>);
};

export default TodoProvider;

