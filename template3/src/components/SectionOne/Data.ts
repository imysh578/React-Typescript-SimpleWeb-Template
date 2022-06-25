export interface sectionDataType {
  id: string,
  lightBg: boolean,
  lightText: boolean,
  lightTextDesc: boolean,
  topLine: string,
  headLine: string,
  description: string,
  buttonLabel: string,
  imgStart: boolean,
  img: string,
  alt: string,
  primary: boolean,
  darkText: boolean,
  dark?: boolean,
  dark2?: boolean,
}

export const sectionOneData = {
  id: 'section1',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Section one',
  headLine: 'This is Headline',
  description: "This is Description",
  buttonLabel: "Button name",
  imgStart: false,
  img: "img1",
  alt: 'section1',
  dark: false,
  primary: false,
  darkText: true,
}