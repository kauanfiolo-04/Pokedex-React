'use client'

import { PokeType } from '@/types'
import {useParams} from 'next/navigation'
import { useEffect, useState } from 'react'
import { getPokemon } from '../services/servicesAPI'
import PokeCard from '../components/PokeCard'

const Pokemon=()=>{
  const params=useParams<{name_or_id:string}>()
  const [pokeInfo,setPokeInfo]=useState<PokeType|null>(null)

  useEffect(()=>{
    getPokemon(params.name_or_id).then(r=>setPokeInfo(r))
  },[params])
  
  return (
    <div>
      <PokeCard 
        id={pokeInfo?.id ?? 0}
        types={pokeInfo?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
        name={pokeInfo?.name ?? ''}
        img={{
          url:pokeInfo?.sprites.front_default ?? '',
          gif: pokeInfo?.sprites.other.showdown.front_default
        }}
      />
    </div>
  )
}

export default Pokemon