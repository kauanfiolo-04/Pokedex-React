'use client'

import { useEffect, useState } from 'react'
import ListPokemons from "../components/ListPokemons"

const Home=()=>{
  const [pagination,setPagination]=useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
      <ListPokemons limit={30} offset={0}/>
    </main>
  )
}

export default Home