import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    #2973fd 0%,
    #0041b9 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({theme}) => theme.breakpoint.xs} {
    height: 80%;
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 2rem;
  margin-top: 2rem;
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
  font-weight: 700;
  font-size: 2rem;

  @media ${({theme}) => theme.breakpoint.xs} {
    margin-left: 1rem;
    margin-top: .5rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({theme}) => theme.breakpoint.xs} {
    padding: 0.75rem;
  }
`;

export const Form = styled.form`
  background: ${({theme}) => theme.color.dark};
  max-width: ${({theme}) => theme.maxWidth.xs};
  height: auto;
  width: 100%;
  z-index:1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;
  border-radius: .5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  @media ${({theme}) => theme.breakpoint.xs} {
    padding: 2rem;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 2.75rem;
  color: ${({theme}) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({theme}) => theme.color.white};
`;

export const FormInput = styled.input`
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: .25rem;
`;

export const FormButton = styled.button`
  background: ${({theme}) => theme.color.primary};
  padding: 1rem 0;
  border: none;
  border-radius: .25rem;
  font-size: 1.25rem;
  color: ${({theme}) => theme.color.white};
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme}) => theme.color.white};
  font-size: 1.5rem;
`;