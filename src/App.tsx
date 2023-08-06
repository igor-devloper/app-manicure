import './css/Global.css'
import { Carousel } from './components/Carousel'
import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main >
        <Carousel />
        <Footer />
      </main>
    </>
  )
}

