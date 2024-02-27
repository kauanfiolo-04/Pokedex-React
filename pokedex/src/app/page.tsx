'use client'

import Image from 'next/image'
import ListPokemons from './components/ListPokemons'
import { useState, useEffect } from 'react'

export default function Home() {
  const [pagination, setPagination]=useState(0)
  const handleSearch=(pokeTerm:string)=>{
    window.location.href=`/${pokeTerm.toLowerCase()}`
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#e9e8e8]">

      <div className='w-full h-[10vh] flex justify-center px-[15%]'>
        <form className='flex w-[80vw] re1:w-[400px]'>
          <input className='placeholder:text-black text-black rounded-lg px-3 py-2 outline-none my-2 
            placeholder:line-clamp-1 placeholder:text-left w-full'
            placeholder='Search pokemon by name or id' type='text' onInput={e=>handleSearch((e.target as HTMLInputElement).value)}
          />
          {/* <button>
            Search
          </button> */}
        </form>
      </div>

      <div className='flex justify-center h-[70vh] overflow-y-scroll w-full px-[15%]'>
        <ListPokemons limit={30} offset={pagination}/>
      </div>

      <div className='flex gap-4 items-center h-[20vh]'>
        <button
          disabled={pagination===0}
          onClick={()=>{
            setPagination(prevValue=>prevValue-30)
          }}
        >Prev poke...</button>
        <button
          onClick={()=>{
            setPagination(prevValue=>prevValue+30)
          }}
        >Next poke...</button>
      </div>
    </main>
  );
}
