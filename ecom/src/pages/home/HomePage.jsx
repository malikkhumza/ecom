import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSec/HeroSection'
import Category from '../../components/productCategory/Category.jsx'
import HomepgProductCard from '../../components/homepageProductCard/HomepgProductCard.jsx'
import Track from '../../components/track/Track.jsx'
import Testimonial from '../../components/testimonial/Testimonial.jsx'
import myContext from '../../components/context/context.jsx'
import { useContext } from 'react'

function HomePage() {
  const context = useContext(myContext);
    const name = context
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomepgProductCard/>
      <Track/>
      <Testimonial/>
      {name}
    </Layout>
  )
}

export default HomePage