import { Plus } from "@phosphor-icons/react";
import React from "react";
import Logo from '../assets/logo.png'

export function Header() {
  return (
    <header>
      <div className='w-full mx-auto flex items-center justify-between p-20'>
        <img src={Logo} alt='Logo'></img>

        <button
          type='button'
          className='border text-white transition-colors border-violet-500 font-semibold rounded-lg w-[427px] px-6 py-4 flex items-center justify-center gap-3 hover:border-violet-300'
        >
          <Plus size={14} className='text-violet-500' />
          Realizar Agendamento
        </button>
      </div>
    </header>
  )
}