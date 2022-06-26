import React, { useState } from "react";
import Video from "/videos/video.mp4";
import ButtonScroll from "../BoilerPlate/ButtonScroll";

import {
	ArrowForward,
	ArrowRight,
	HeroBg,
	HeroBtnWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	VideoBg,
} from "./styled";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<HeroContainer id="home">
				<HeroBg>
					<VideoBg autoPlay loop muted src={Video} typeof="video/mp4" />
				</HeroBg>
				<HeroContent>
					<HeroH1>Simple Website</HeroH1>
					<HeroP>using React, Typescript, and styled-Component</HeroP>
					<HeroBtnWrapper>
						<ButtonScroll
							to="signup"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
						>
							Get Started {hover ? <ArrowForward /> : <ArrowRight />}
						</ButtonScroll>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroContainer>
		</>
	);
};

export default HeroSection;
