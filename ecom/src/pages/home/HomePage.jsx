import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSec/HeroSection'
import Category from '../../components/productCategory/Category.jsx'
function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
    </Layout>
  )
}

export default HomePage