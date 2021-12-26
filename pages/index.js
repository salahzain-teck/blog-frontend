import React, { useEffect, useState } from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  // const [data, setData] = useState()
  console.log('img--url ==>',articles[0].image.url)
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="home__content">
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{homepage.hero.title}</h1> */}
          <Articles articles={articles} />
        </div>
      </div>
      </div>
     
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?_sort=published_at:desc"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}
// hh
export default Home
