import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/herosection/hero'
import Delivery from './components/deliverySection/deliver'
import Arrivals from './components/arrivals/arrivals'
import Products from './components/products/products'
import SubscribeForm from './components/SubscribeForm/SubscribeForm'
import CustomerReview from './components/CustomerReview/CustomerReview'
import Footer from './components/Footer/Footer'


const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
      <Arrivals/>
      <Products/>
      <SubscribeForm/>
      <CustomerReview/>
      <Footer/>
    </>
  )
}

export default Page
