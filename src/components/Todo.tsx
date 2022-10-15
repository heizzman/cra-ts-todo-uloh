import { TodoContext } from "../Providers/TodoContext";
import { useContext, useState } from "react";
import { Todos, Checkbox, DeleteButton, EditButton, Button, Edit } from '../common';
import { GrEdit } from 'react-icons/gr';
import { IoTrashBin } from 'react-icons/io5';

const Todo: React.FC<ITodo> = (todo) => {

	const { delTodo, updComplTodo, updTitleTodo } = useContext(TodoContext) as ContextType;
	const [editable, setEditable] = useState(false);
	const [editedInput, setEditedInput] = useState(todo.title);

	const handleToggleClick = () => {
		updComplTodo(todo)
	};

	const handleDelete = (todo: ITodo): void => {
		delTodo(todo)
	}

	const editTodo = (todo: ITodo) => {
		updTitleTodo(todo, editedInput)
	};

	const handleEditSubmit = (e: React.FormEvent, todo: ITodo) => {
		e.preventDefault();
		editTodo(todo);
		setEditable(!editable);
	};


	return (
		<Todos>
			<Checkbox
				type='checkbox'
				checked={todo.completed}
				onChange={handleToggleClick}
			/>
			{!editable ? (
				<h3>{todo.title}</h3>
			) : (
				<form onSubmit={(e) => handleEditSubmit(e, todo)}>
					<Edit
						onChange={(e: any) => setEditedInput(e.target.value)}
						value={editedInput}
						autoFocus
					/>
					<Button type='submit'>Edit</Button>
				</form>
			)}
			<EditButton onClick={() => setEditable(!editable)}>
				<GrEdit />
			</EditButton>
			<DeleteButton onClick={() => handleDelete(todo)}>
				<IoTrashBin />
			</DeleteButton>

		</Todos>
	);
};

export default Todo;
