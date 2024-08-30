/** @format */

// src/components/ui/Input.js
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	padding: ${({ theme }) => theme.spacing.small};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 4px;
	font-size: ${({ theme }) => theme.fontSize.medium};
	width: 100%;
	box-sizing: border-box;

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary};
		outline: none;
	}
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
