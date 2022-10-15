interface ITodo {
  userId: string | number;
  id: string | number;
  title: string;
  completed: boolean;
}

type ContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void,
  delTodo: (todo: ITodo) => void
  setTodos: (todo: ITodo[]) => void
  updComplTodo: (todo: ITodo)=> void
  updTitleTodo: (todo: ITodo, editedInput:string)=> void
 
}
