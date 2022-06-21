import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md"

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 50rem;
  position: relative;
  z-index: ${({theme}) => theme.zIndex.heroContainer};

  /* TODO: add :before styles*/
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: ${({theme}) => theme.zIndex.heroContent};
  max-width: ${({theme}) => theme.maxWidth.xl};
  position: absolute;
  padding: .5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${({theme}) => theme.color.white};
  font-size: 3rem;
  text-align: center;

  @media ${({theme}) => theme.breakpoint.sm} {
    font-size: 2.5rem;
  }

  @media ${({theme}) => theme.breakpoint.xs} {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 1.5rem;
  color: ${({theme}) => theme.color.white};
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media ${({theme}) => theme.breakpoint.sm} {
    font-size: 1.5rem;
  }

  @media ${({theme}) => theme.breakpoint.xs} {
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: .5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: .5rem;
  font-size: 1.25rem;
`;