'use client'

import Image from 'next/image'
import ListPokemons from './components/ListPokemons'
import { useState, useEffect } from 'react'

export default function Home() {
  const [pagination, setPagination]=useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <label>
        <input className='placeholder:text-black text-black rounded-lg px-3 py-2 outline-none my-2'
          placeholder='Search pokemon by name...' type='text' onInput={e=>{
          window.location.href=`/${(e.target as HTMLInputElement).value.toLowerCase()}`
        }}/>
      </label>

      <ListPokemons limit={30} offset={pagination}/>

      <div className='flex gap-4 items-center'>
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
