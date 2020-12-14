import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}
