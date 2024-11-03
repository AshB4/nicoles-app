/** @format */

// src/pages/LoginSignup.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/button";
import Input from "../../components/ui/Global/Input";

// Styled Components
const LoginSignupContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: url("/assets/images/BlueBackground.jpeg"); /* Background image for the page */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
`;

const FormContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	width: 300px;
	text-align: center;
`;

const FormTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

const ToggleButton = styled.button`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	font-size: 0.9rem;
	margin-top: 1rem;

	&:hover {
		text-decoration: underline;
	}
`;

// Styled Components (same as before)

function LoginSignup() {
	const [isLogin, setIsLogin] = useState(true); 
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			if (isLogin) {
				// Handle login logic here
				alert(`Logging in with ${email}`);
				// Reset states on success
			} else {
				alert(`Signing up with ${name} and ${email}`);
				// Reset states on success
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

	return (
		<LoginSignupContainer>
			<FormContainer>
				<FormTitle>{isLogin ? "Login" : "Sign Up"}</FormTitle>
				<form onSubmit={handleSubmit}>
					{!isLogin && (
						<StyledInput
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					)}
					<StyledInput
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					{!validateEmail(email) && email && (
						<p style={{ color: "red" }}>Invalid email format</p>
					)}
					<StyledInput
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{error && <p style={{ color: "red" }}>{error}</p>}
					<StyledButton type="submit" disabled={loading}>
						{loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
					</StyledButton>
				</form>
				<ToggleButton onClick={() => setIsLogin(!isLogin)}>
					{isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
				</ToggleButton>
			</FormContainer>
		</LoginSignupContainer>
	);
}

export default LoginSignup;
