import styled, { css } from "styled-components";
import Button from "../../shared/Button";

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
    transition-duration: 0.2s;
  }
`;

interface NavButtonProps {
	isActive: boolean;
}

export default styled(Button)<NavButtonProps>`
  margin-left: 25px;
  margin-right: 25px;
  width: 160px;
  text-align: center;
  ${(props) => (props.isActive ? activeStyles : inactiveStyles)};
`;
