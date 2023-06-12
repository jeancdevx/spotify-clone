'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

const ListItem = ({ image, name, href }) => {
  const router = useRouter()

  const onClick = () => {
    // add authentication before redirecting

    router.push(href)
  }

  return (
    <article
      className='group relative flex cursor-pointer items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-4 transition hover:bg-neutral-100/20'
      onClick={onClick}
    >
      <figure className='relative min-h-[64px] min-w-[64px]'>
        <Image
          src={image}
          alt={name}
          className='object-cover transition group-hover:opacity-90'
          fill
        />
      </figure>

      <h3 className='truncate py-5 font-semibold text-white'>
        {name ?? 'No name'}
      </h3>

      <button className='absolute right-5 flex items-center justify-center rounded-full bg-green-500 p-4 opacity-0 drop-shadow-md transition duration-200 hover:scale-110 group-hover:opacity-75'>
        <FaPlay className='text-black' />
      </button>
    </article>
  )
}

export default ListItem
