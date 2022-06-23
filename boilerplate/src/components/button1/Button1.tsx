import React from "react";
import { ButtonType } from "./interface";
import { ButtonContainer, ButtonContext, HoverBox } from "./styled";

const Button1: React.FC<ButtonType> = ({ children }) => {
	return (
		<ButtonContainer>
			<ButtonContext>{children}</ButtonContext>
			<HoverBox />
		</ButtonContainer>
	);
};

export default Button1;
