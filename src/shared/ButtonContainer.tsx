import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 25px;
	@media (max-width: 500px) {
		align-items: center;
		flex-direction: column;
	}
`;
