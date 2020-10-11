import styled, { css } from "styled-components";

const activeStyles = css`
	color: #ffffff;
	background: #343a40;
`;

const inactiveStyles = css`
	color: #343a40;
	background: #ffffff;
	border: 1px solid #343a40;
	:hover {
		color: #ffffff;
		background: #343a40;
	}
`;

interface NavButtonProps {
	isActive: boolean;
}

const Button = styled.b`
	font-weight: normal;
	font-size: 15px;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 20px;
	border: none;
	transition: 0.3s;
	outline: none;
	max-width: 140px;
	min-width: 100px;
`;

export default styled(Button)<NavButtonProps>`
	${(props) => (props.isActive ? activeStyles : inactiveStyles)};
`;
