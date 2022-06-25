import styled from "styled-components";

export const Container = styled.div`
	min-height: calc(100vh - 5rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
	background: ${({ theme }) => theme.color.dark};
`;

export const Wrapper = styled.div`
	height: calc(100% - 5rem);
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 1rem;
	padding: 0 50px;

	@media ${({ theme }) => theme.breakpoint.lg} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		grid-template-columns: 1fr;
		padding: 0 1.5rem;
	}
`;

export const Card = styled.div`
	background: ${({ theme }) => theme.color.white};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 0.75rem;
	max-width: 21.5rem;
	padding: 2rem;
	margin: 0 auto;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		max-width: 80%;
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
	margin-bottom: 0.75rem;
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const H1 = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.color.white};

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 2rem;
	}
`;

export const H2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 0.75rem;
`;

export const P = styled.p`
	font-size: 1rem;
	text-align: center;
`;
