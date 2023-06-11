'use client'

import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

const Library = () => {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <nav className='flex flex-col'>
      <header className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist className='h-6 w-6 text-neutral-400' />
          <h2 className='text-base font-medium text-neutral-400'>
            Your Library
          </h2>
        </div>

        <AiOutlinePlus
          className='h-4 w-4 cursor-pointer text-neutral-400'
          onClick={onClick}
        />
      </header>

      <ul className='mt-4 flex flex-col gap-y-2 px-3'>
        <li className='text-sm font-medium text-neutral-400'>List of Songs</li>
      </ul>
    </nav>
  )
}

export default Library
