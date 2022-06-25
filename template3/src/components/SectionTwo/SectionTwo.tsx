import React from "react";
import {
	SectionTwoCard,
	SectionTwoContainer,
	SectionTwoH1,
	SectionTwoH2,
	SectionTwoImg,
	SectionTwoImgWrap,
	SectionTwoP,
	SectionTwoWrapper,
} from "./styled";

const SectionTwo = () => {
	return (
		<SectionTwoContainer>
			<SectionTwoH1>Section Two</SectionTwoH1>
			<SectionTwoWrapper>
				{/* Card1 */}
				<SectionTwoCard>
					<SectionTwoImgWrap>
						<SectionTwoImg src="/images/img4.svg" />
					</SectionTwoImgWrap>
					<SectionTwoH2>H2 Headline</SectionTwoH2>
					<SectionTwoP>Description</SectionTwoP>
				</SectionTwoCard>

				{/* Card2 */}
				<SectionTwoCard>
					<SectionTwoImgWrap>
						<SectionTwoImg src="/images/img5.svg" />
					</SectionTwoImgWrap>
					<SectionTwoH2>H2 Headline</SectionTwoH2>
					<SectionTwoP>Description</SectionTwoP>
				</SectionTwoCard>

				{/* Card3 */}
				<SectionTwoCard>
					<SectionTwoImgWrap>
						<SectionTwoImg src="/images/img6.svg" />
					</SectionTwoImgWrap>
					<SectionTwoH2>H2 Headline</SectionTwoH2>
					<SectionTwoP>Description</SectionTwoP>
				</SectionTwoCard>
			</SectionTwoWrapper>
		</SectionTwoContainer>
	);
};

export default SectionTwo;
