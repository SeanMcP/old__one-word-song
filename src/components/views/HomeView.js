import React from 'react'

import FadeIn from 'components/spring/FadeIn'
import Layout from 'components/layout/Layout'

import Link from 'components/common/Link'

const HomeView = () => {
  return (
    <Layout hideHeader>
      <FadeIn delay={1000}>Hello there!</FadeIn>
      <Link to="/setup">Let's play!</Link>
    </Layout>
  )
}

export default HomeView
