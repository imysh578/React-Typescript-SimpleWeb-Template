import styled from "styled-components";

interface Container {
	lightBg?: boolean;
}

interface Row {
	imgStart?: boolean;
}

interface Heading {
	lightText?: boolean;
}

interface Subtitle {
	darkText?: boolean;
}

export const Container = styled.div<Container>`
	min-height: calc(100vh - 5rem);
	color: ${({ theme }) => theme.color.white};
	background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

	@media ${({ theme }) => theme.breakpoint.sm} {
		padding: 100px 0;
	}
`;

export const Wrapper = styled.div`
	display: grid;
	z-index: ${({ theme }) => theme.zIndex.infoWrapper};
	min-height: calc(100vh - 5rem);
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 1.5rem;
	justify-content: center;
`;

export const Row = styled.div<Row>`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `"col2 col1"` : `"col1 col2"`};

	@media ${({ theme }) => theme.breakpoint.sm} {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `"col2" "col1"` : `"col1" "col2"`};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 1rem;
	padding: 0 1rem;
	grid-area: col1;
`;

export const Column2 = styled.div`
	margin-bottom: 1rem;
	padding: 0 1rem;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 5rem;
`;

export const TopLine = styled.p`
	color: ${({ theme }) => theme.color.primary};
	font-size: 1rem;
	line-height: 1rem;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 1rem;
`;

export const Heading = styled.h1<Heading>`
	margin-bottom: 1.5rem;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText, theme }) =>
		lightText ? theme.color.light : theme.color.dark};

	@media ${({ theme }) => theme.breakpoint.xs} {
		font-size: 2rem;
	}
`;

export const Subtitle = styled.p<Subtitle>`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 1.1rem;
	line-height: 1.5rem;
	color: ${({ darkText, theme }) =>
		darkText ? theme.color.dark : theme.color.light};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;