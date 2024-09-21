import React from 'react'
import ButtonAppBar from './Components/Navbar'
import CustomProductSection from './Components/CustomProductSection'
import FeaturesSection from './Components/FeatureSection'
import ExploreProducts from './Components/ExploreProducts'
import StepsInvolved from './Components/StepsInvolved'
import ConnectStoreSection from './Components/ConnectStore'
import TestimonialCarousel from './Components/Testimonials'
import PricingComponent from './Components/PricingComponent'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <ButtonAppBar/>
      <CustomProductSection/>
      <FeaturesSection/>
      <ExploreProducts/>
      <StepsInvolved/>
      <ConnectStoreSection/>
      <TestimonialCarousel/>
      <PricingComponent/>
      <Footer/>
    </div>
  )
}

export default App
