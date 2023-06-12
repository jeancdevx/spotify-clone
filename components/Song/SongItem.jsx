'use client'

import Image from 'next/image'
import PlayButton from './PlayButton'
import useLoadImage from './useLoadImage.hook'

const SongItem = ({ song, onClick }) => {
  const imagePath = useLoadImage(song)

  return (
    <div
      onClick={() => onClick(song.id)}
      className='group relative z-30 flex cursor-pointer flex-col items-center justify-center gap-x-4 overflow-hidden rounded-md bg-neutral-400/5 p-3 shadow-sm backdrop-blur-xl'
    >
      <div className='relative z-10 aspect-square h-full w-full overflow-hidden rounded-md'>
        <Image
          src={imagePath || '/images/liked.png'}
          alt={`${song.title} song`}
          className='object-cover transition group-hover:scale-105'
          fill
        />
      </div>

      <div className='flex w-full flex-col items-start gap-y-1 py-4'>
        <h3 className='w-full truncate font-semibold text-white'>
          {song.title}
        </h3>
        <p className='w-full truncate text-sm text-neutral-500'>
          {song.author}
        </p>
      </div>

      <div className='absolute bottom-24 right-5 z-20'>
        <PlayButton />
      </div>
    </div>
  )
}

export default SongItem
