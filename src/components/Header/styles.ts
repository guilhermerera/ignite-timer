import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 4rem;
		height: 4rem;
	}

	nav {
		display: flex;
		gap: 0.5rem;

		a {
			width: 3rem;
			height: 3rem;

			display: flex;
			justify-content: center;
			align-items: center;

			color: ${({ theme }) => theme["gray-100"]};
			border-radius: 4px;

			border-top: 3px solid transparent;
			border-bottom: 3px solid transparent;

			transition: all 0.1s ease-in-out;

			&:hover {
				border-bottom-color: ${({ theme }) => theme["green-500"]};
			}

			&.active {
				color: ${({ theme }) => theme["green-500"]};
			}
		}
	}
`;
