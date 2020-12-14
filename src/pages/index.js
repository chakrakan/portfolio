import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IntroSection = React.lazy(() =>
  import("../components/sections/IntroSection")
)

const FooterSection = React.lazy(() =>
  import("../components/sections/FooterSection")
)

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <LazyComponent Component={IntroSection} path="/" />
      <LazyComponent Component={FooterSection} />
    </Layout>
  )
}
