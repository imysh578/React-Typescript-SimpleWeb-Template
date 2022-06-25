import React from "react";
import ButtonScroll from "../BoilerPlate/ButtonScroll";
import { sectionDataType } from "./Data";
import {
	BtnWrap,
	Column1,
	Column2,
	Heading,
	Img,
	ImgWrap,
	Container,
	Row,
	Wrapper,
	Subtitle,
	TextWrapper,
	TopLine,
} from "./styled";

const SectionOne: React.FC<sectionDataType> = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
}) => {
	return (
		<>
			<Container lightBg={lightBg} id={id}>
				<Wrapper>
					<Row imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<ButtonScroll
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										offset={-80}
										primary={primary ? "true" : ""}
										dark={dark ? "true" : ""}
										dark2={dark2 ? "true" : ""}
									>
										{buttonLabel}
									</ButtonScroll>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={`/images/${img}.svg`} alt={alt} />
							</ImgWrap>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default SectionOne;
