import styled from "styled-components";

export const SectionTwoContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.color.dark};

	@media ${({ theme }) => theme.breakpoint.sm} {
		height: 1100px;
	}

	@media ${({ theme }) => theme.breakpoint.xs} {
		height: 1300px;
	}
`;

export const SectionTwoWrapper = styled.div`
	max-width: 1000px;
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

export const SectionTwoCard = styled.div`
	background: ${({ theme }) => theme.color.white};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 0.75rem;
	max-height: 21.5rem;
	padding: 2rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const SectionTwoImgWrap = styled.div`
	height: 20rem;
	width: 20rem;
	margin-bottom: 0.75rem;
`;

export const SectionTwoImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const SectionTwoH1 = styled.h1`
	font-size: 2.5rem;
	color: ${({ theme }) => theme.color.white};

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 2rem;
	}
`;

export const SectionTwoH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 0.75rem;
`;

export const SectionTwoP = styled.p`
	font-size: 1rem;
	text-align: center;
`;
