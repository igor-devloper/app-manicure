import React from "react";
import { Card } from "./Card";
import Item from '../assets/item.png'
import { CaretLeft, CaretRight } from "@phosphor-icons/react";


export function Carousel() {
  const scrollLeft = () =>{
    document.getElementById("content").scrollLeft -= 200
  }
  const scrollRight = () =>{
    document.getElementById("content").scrollLeft += 200
  }

  return (
    <>
      <div id="content" className="p-4 flex items-center justify-start overflow-x-auto relative scroll-smooth scrollbar-hide md:scrollbar-default">
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
        <Card alt='alongamento' description='Alongamento de Unhas' price={27} img={Item} />
      </div>
      <div className="absolute bg-pretuu  rounded-full items-center justify-center right-2 top-44 m-2 space-x-4 ">
        <button className="p-4 text-white" onClick={scrollLeft}>
          <CaretLeft/>
        </button>
        <button className="p-4 text-white" onClick={scrollRight}>
          <CaretRight/>
        </button>
      </div>
    </>
  )
}