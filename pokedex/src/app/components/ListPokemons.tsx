'use client'

import { useEffect, useState } from 'react'
import { getPokemons } from '../services/servicesAPI'
import { PokeType } from '@/types'
import PokeCard from './PokeCard'

interface Props{
  limit:number
  offset:number
}

const ListPokemons=({limit, offset}:Props)=>{
  const [pokemons,setPokemons]=useState<PokeType[]>([])

  useEffect(()=>{
    getPokemons(limit, offset).then(r=>setPokemons(r))
  },[limit, offset])

  return <ul className='flex flex-col gap-2 w-full'>{pokemons.map((poke, index)=>
    <li key={index} className='w-full flex justify-center'>
      <PokeCard
        id={poke?.id ?? 0}
        types={poke?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
        name={poke?.name ?? ''}
        img={{
          url:poke?.sprites.front_default ?? '',
          gif: poke?.sprites.other.showdown.front_default
        }}
      />
    </li>
  )}</ul>
}

export default ListPokemons