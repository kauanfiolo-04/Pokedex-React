'use client'

import { PokeType } from '@/types'
import {useParams} from 'next/navigation'
import { useEffect, useState } from 'react'
import { getPokemon } from '../services/servicesAPI'
import PokeCard from '../components/PokeCard'

const Pokemon=()=>{
  const params=useParams<{name:string}>()
  const [pokeInfo,setPokeInfo]=useState<PokeType|null>(null)

  useEffect(()=>{
    getPokemon(params.name).then(r=>setPokeInfo(r))
  },[params])
  
  return (
    <>
      <PokeCard 
        id={pokeInfo?.id ?? 0}
        types={pokeInfo?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
        name={pokeInfo?.name ?? ''}
        img={{
          url:pokeInfo?.sprites.front_default ?? '',
          gif: pokeInfo?.sprites.other.showdown.front_default
        }}
      />
    </>
  )
}

export default Pokemon