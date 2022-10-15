import { useContext, useEffect } from "react";
import Todo from './Todo';
import { TodoContext } from "../Providers/TodoContext";
import { http } from "../http";

const Todolist = () => {
  const { todos, setTodos } = useContext(TodoContext) as ContextType;

  useEffect(() => {
    http.getTodo().then((data: ITodo[]) => {
      setTodos(data); 
    }).catch(error => {
      console.error('Error fetch todos', error);
    }) 
  }, [setTodos]);

  return (
    <>
      {todos.map((todo: ITodo) => (<Todo key={todo.id} {...todo} />))}
    </>
  )

};

export default Todolist;
