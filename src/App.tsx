import './css/Global.css'
import { Carousel } from './components/Carousel'
import React from 'react'
import { Header } from './components/Header'

export default function App() {
  return (
    <>
      <Header/>
      <main >
       <Carousel/>
      </main>
    </>
  )
}

