import React from 'react'
import ButtonScroll from '../BoilerPlate/ButtonScroll'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './styled'

const InfoSection = () => {
  return (
    <>
      <InfoContainer lightBg={true}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading lightText={true}>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <ButtonScroll to="home">Button</ButtonScroll>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection