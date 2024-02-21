import type { PokeCard } from '@/types'
import Image from 'next/image'

const PokeCard=({id ,name, types, img}:PokeCard)=>{

  return (
    <div className='flex px-2 py-2 justify-center w-full re1:w-[400px] h-[60px] re1:h-[100px] bg-white rounded-lg text-black'>
      <div className='w-1/4'>
        <Image className='m-auto' alt='poke gif or image' src={img.gif ?? img.url} width={50} height={50}/>
      </div>
      <div className='w-1/2 flex flex-col items-start justify-center'>
        <span className='text-xl'>{name}</span>
        <p className='flex gap-4 items-center justify-start text-sm'>{types.map(type=>
          <a href={type.type.url} >{type.type.name}</a>
        )}</p>
      </div>
      <div className='w-1/4'>
          <p className='text-2xl'>#{id.toString().padStart(3, '0')}</p>
      </div>
    </div>
  )
}
export default PokeCard