import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"

const Home = ({ campgrounds }) => {
  return (
    <div>
      <Nav />
      <Header />
      <Layout campgrounds={campgrounds} />
    </div>
  )
}

export async function getStaticProps() {
  const campgrounds = await Promise.all([
    fetchAPI("/campgrounds"),
  ])

  return {
    props: { campgrounds },
    revalidate: 1,
  }
}

export default Home