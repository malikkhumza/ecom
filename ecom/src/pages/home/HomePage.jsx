import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSec/HeroSection'
import Category from '../../components/productCategory/Category.jsx'
import HomepgProductCard from '../../components/homepageProductCard/HomepgProductCard.jsx'
import Track from '../../components/track/Track.jsx'
import Testimonial from '../../components/testimonial/Testimonial.jsx'
function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomepgProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default HomePage