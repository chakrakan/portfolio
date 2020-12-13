import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}
