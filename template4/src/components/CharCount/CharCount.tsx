import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { charCountState, textState } from '../../recoil/charCount';
import { Count, Echo, TextInput } from './styled'

const CharCount = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
      <TextInput onChange={handelOnChange}/>
      <Echo>Echo: {text}</Echo>
      <Count>Character Count: {count}</Count>
    </>
  )
}

export default CharCount