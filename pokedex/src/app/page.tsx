'use client'

import Image from 'next/image'
import ListPokemons from './components/ListPokemons'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [pagination, setPagination]=useState(0)

  const inputSearch=useRef<HTMLInputElement>(null)

  const handleSearch=()=>{
    const InputSearch=inputSearch.current as HTMLInputElement
    if(InputSearch.value){
      window.location.href=`/${InputSearch.value.toLowerCase()}`
    }
  } 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#e9e8e8]">

      <div className='w-full h-[10vh] flex justify-center px-[15%]'>
        <form className='flex w-[80vw] re1:w-[400px]' action={handleSearch}>
          <input className='placeholder:text-black text-black rounded-lg px-3 py-2 outline-none my-2 
            placeholder:line-clamp-1 placeholder:text-left w-[90%]' ref={inputSearch}
            placeholder='Search pokemon by name or id' type='text'
          />
          <button className='w-[10%] bg-[#161616]' type='submit'>
            S
          </button>
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
  )
}
