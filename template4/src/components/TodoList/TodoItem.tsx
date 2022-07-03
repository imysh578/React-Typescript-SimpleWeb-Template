import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/todoList";
import { TodoList } from "./interface";
import { DeleteBtn, CompleteCheckBtn, Item, ItemWrap } from "./styled";

const TodoItem: React.FC<TodoList.TodoItem> = ({ item }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: e.target.value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<ItemWrap>
			<Item type="text" value={item.text} onChange={editItemText} />
			<CompleteCheckBtn
				type="checkbox"
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<DeleteBtn onClick={deleteItem}>X</DeleteBtn>
		</ItemWrap>
	);
};

const replaceItemAtIndex = (
	arr: TodoList.Item[],
	index: number,
	newValue: TodoList.Item
): TodoList.Item[] => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (
	arr: TodoList.Item[],
	index: number
): TodoList.Item[] => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default TodoItem;
