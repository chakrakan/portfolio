import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
// import MainHeroSection from "../components/sections/MainHeroSection"
// import AboutHeroSection from "../components/sections/AboutHeroSection"

const IntroSection = React.lazy(() =>
  import("../components/sections/IntroSection")
)

const ProjectsSection = React.lazy(() =>
  import("../components/sections/ProjectsSection")
)

const ArtworkSection = React.lazy(() =>
  import("../components/sections/ArtworkSection")
)

const MusicSection = React.lazy(() =>
  import("../components/sections/MusicSection")
)

const ContactSection = React.lazy(() =>
  import("../components/sections/ContactSection")
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
      <LazyComponent Component={ProjectsSection} path="/projects" />
      <LazyComponent Component={ArtworkSection} path="/artworks" />
      <LazyComponent Component={MusicSection} path="/artworks" />
      <LazyComponent Component={ContactSection} path="/artworks" />
      <LazyComponent Component={FooterSection} />
    </Layout>
  )
}
