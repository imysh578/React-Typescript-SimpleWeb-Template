import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/todoList";
import { AddBtn, CreatorInput, CreatorWrap } from "./styled";
import { getId } from "./utils";

const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState("");
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = () => {
    if (inputValue) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    }
	};

	const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setInputValue(e.target.value);
	};

	const handleOnKeypress: React.KeyboardEventHandler<HTMLInputElement> = (
		e
	) => {
    
    //it triggers by pressing the enter key
		if (e.keyCode === 13) {
			addItem();
      e.currentTarget.value = ""
		}
	};

	return (
		<CreatorWrap>
			<CreatorInput onChange={handleOnChange} onKeyDown={handleOnKeypress} />
			<AddBtn onClick={addItem}>Add</AddBtn>
		</CreatorWrap>
	);
};

export default TodoItemCreator;
