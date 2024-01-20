'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const IcoMoon = createGlobalStyle`
@font-face {
   font-family: "icomoon";
   src: url("/fonts/icomoon.eot");
   src: url("/fonts/icomoon.eot?#iefix")
   format("embedded-opentype"),
   url("/fonts/icomoon.svg#icomoon") format("svg"),
   url("/fonts/icomoon.woff") format("woff"),
   url("/fonts/icomoon.ttf") format("truetype");
};`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <IcoMoon />
  </>
)

export default GlobalStyles
