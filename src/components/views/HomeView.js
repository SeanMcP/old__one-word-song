import React from 'react'

import FadeIn from '../spring/FadeIn'
import Layout from '../layout/Layout'

const HomeView = () => {
  return (
    <Layout hideHeader>
      <FadeIn delay={1000}>Hello there!</FadeIn>
    </Layout>
  )
}

export default HomeView
