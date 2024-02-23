import axios from 'axios'
import type { PokeType } from '@/types'

const api=axios.create({baseURL:'https://pokeapi.co/api/v2'})

export const getPokemon:(name:string)=>Promise<PokeType> =async (name)=>{
  const data=await api.get(`/pokemon/${name}`).then(r=>r.data).catch(err=>console.error(err)) ?? {}
  return data
}

export const getPokemons:(limit:number, offset:number)=>Promise<PokeType[]> =async(limit, offset)=>{
  const pokemons:Array<{name:string, url:string}> =await api.get(`/pokemon?limit=${limit}&offset=${offset}`).then(r=>r.data.results).catch(err=>console.error(err)) ?? []
  const finalPokemons:PokeType[]=[]

  for(const poke of pokemons){
    await getPokemon(poke.name).then(poke=>finalPokemons.push(poke))
  }
 
  return finalPokemons
}



