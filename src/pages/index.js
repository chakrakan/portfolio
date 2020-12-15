import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import IntroSection from "../components/sections/IntroSection"
import FooterSection from "../components/sections/FooterSection"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <IntroSection />
      <FooterSection />
    </Layout>
  )
}
