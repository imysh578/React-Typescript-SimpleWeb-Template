import styled from 'styled-components';

const primaryColor = "#1e9bff"

export const HoverBox = styled.i`
  position: absolute;
  inset: 0;
  display: block;

  &::before {
    content: '';
    position: absolute;
    top: -3.5px;
    left: 80%;
    width: 10px;
    height: 5px;
    border: 2px solid ${primaryColor};
    background: #27282c;
    transform: translateX(-50%);
    transition: .5s;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -3.5px;
    left: 20%;
    width: 10px;
    height: 5px;
    border: 2px solid ${primaryColor};
    background: #27282c;
    transition: .5s;
  }
`;

export const ButtonContainer = styled.a`
  position: relative;
  background-color: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  padding: .75rem 2rem;
  transition: 0.5s;

  &:hover {
    letter-spacing: .25rem;
    //#1e9bff
    background: ${primaryColor};
    color: ${primaryColor};
    box-shadow: 0 0 35px ${primaryColor};

    ${HoverBox}::before {
      width: 20px;
      left: 20%;
    }
    ${HoverBox}::after {
      width: 20px;
      left: 80%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const ButtonContext = styled.span`
  position: relative;
  z-index: 1;
`;
