import { Box } from "@chakra-ui/react"
import React from "react"
import Articles from "../components/blog/articles"
import Layout from "../components/blog/layout"
import Seo from "../components/blog/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} /> 
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Box mb="30px">
            {/* <h1>{homepage.hero.title}</h1> */}
          </Box>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home


//! Below is the original setup that it was intended for...
import { Box } from "@chakra-ui/react"
import React from "react"
import Articles from "../components/blog/articles"
import Layout from "../components/blog/layout"
import Seo from "../components/blog/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} /> 
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Box mb="30px">
            {/* <h1>{homepage.hero.title}</h1> */}
          </Box>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
