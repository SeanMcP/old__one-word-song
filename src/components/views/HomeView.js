import React from 'react'

import FadeIn from '../spring/FadeIn'
import Layout from '../layout/Layout'

import Link from '../common/Link'

const HomeView = () => {
  return (
    <Layout hideHeader>
      <FadeIn delay={1000}>Hello there!</FadeIn>
      <Link to="/setup">Let's play!</Link>
    </Layout>
  )
}

export default HomeView
