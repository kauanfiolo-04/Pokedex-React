import axios from 'axios'
import type { PokeType } from '@/types'

const api=axios.create({baseURL:'https://pokeapi.co/api/v2'})

export const getPokemon:(name:string)=>Promise<PokeType> =async (name)=>{
  const data=await api.get(`/pokemon/${name}`).then(r=>r.data).catch(err=>console.error(err)) ?? {}
  return data
}



