import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './styled'

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">SOKURI</Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type="email" required/>
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type="password" />
            <FormButton type="submit">Sign-in</FormButton>
            <Text>Forget Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Signin