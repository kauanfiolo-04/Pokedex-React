import type { PokeCard } from '@/types'
import Image from 'next/image'
import TypeInfo from './TypeInfo'
import Link from 'next/link'

const PokeCard=({id ,name, types, img}:PokeCard)=>{

  return (
    <Link href={`/${name}`} className='flex px-2 py-2 justify-center w-full re1:w-[400px] h-[60px] re1:h-[80px] bg-white rounded-lg text-black'>
      <div className='w-1/4'>
        <Image className='m-auto' alt='poke gif or image' src={img.gif ?? img.url} width={50} height={50}/>
      </div>
      <div className='w-1/2 flex flex-col items-start justify-between'>
        <span className='text-lg re1:text-2xl capitalize'>{name}</span>
        <div className='flex gap-2 re1:gap-4 items-center justify-start'>{types.map(type=>
          <TypeInfo type={type.type.name}/>
        )}</div>
      </div>
      <div className='w-1/4'>
          <p className='text-2xl'>#{id.toString().padStart(3, '0')}</p>
      </div>
    </Link>
  )
}
export default PokeCard