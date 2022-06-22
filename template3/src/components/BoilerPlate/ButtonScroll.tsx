import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

interface ButtonScroll {
  primary?: string;
  big?: string;
  dark?: string;
  fontBig?: string;
}

const ButtonScroll = styled(LinkS)<ButtonScroll>`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#4284ff' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF1')};
  }
`;

export default ButtonScroll