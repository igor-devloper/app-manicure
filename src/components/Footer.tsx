import { BookOpenText, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import React from "react";

export function Footer() {
  return (
    <div className="bg-pretu w-full h-20 flex items-center justify-between p-4 text-white">
      <div>
        <p className="opacity-80">Developed by <a href="https://github.com/igor-devloper" target="_blank" className="underline underline-offset-2 font-semibold">Igor Wagner</a> 🧡</p>
      </div>
      <div className="flex gap-[100px] justify-between">
        <button className="bg-violet-500 flex px-10 py-4 gap-3 rounded-lg items-center justify-between hover:bg-violet-400 transition-colors">
          <InstagramLogo size={20} color="#fff" />
          <p>Instagram</p>
        </button>
        <button className="bg-violet-500 flex px-10 py-4 gap-3 rounded-lg items-center justify-between hover:bg-violet-400 transition-colors">
          <WhatsappLogo size={20} color="#fff" />
          <p>Whatsapp</p>
        </button>
        <button className="bg-violet-500 flex px-10 py-4 gap-3 rounded-lg items-center justify-between hover:bg-violet-400 transition-colors">
          <BookOpenText size={20} color="#fff" />
          <p>Catalogo</p>
        </button>
      </div>
    </div>
  )
}