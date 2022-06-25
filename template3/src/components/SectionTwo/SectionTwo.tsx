import React from "react";
import {
	Card,
	Container,
	H1,
	H2,
	Img,
	ImgWrap,
	P,
	Wrapper,
} from "./styled";

const SectionTwo = () => {
	return (
		<Container id="section2">
			<H1>Section Two</H1>
			<Wrapper>
				{/* Card1 */}
				<Card>
					<ImgWrap>
						<Img src="/images/img4.svg" />
					</ImgWrap>
					<H2>Headline</H2>
					<P>Description</P>
				</Card>

				{/* Card2 */}
				<Card>
					<ImgWrap>
						<Img src="/images/img5.svg" />
					</ImgWrap>
					<H2>Headline</H2>
					<P>Description</P>
				</Card>

				{/* Card3 */}
				<Card>
					<ImgWrap>
						<Img src="/images/img6.svg" />
					</ImgWrap>
					<H2>Headline</H2>
					<P>Description</P>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SectionTwo;
