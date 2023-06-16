'use client'

import Image from 'next/image'
import PlayButton from './PlayButton'
import useLoadImage from './useLoadImage.hook'

const SongItem = ({ song, onClick }) => {
  const imagePath = useLoadImage(song)

  return (
    <article
      onClick={() => onClick(song.id)}
      className='group relative flex cursor-pointer flex-col items-center justify-center gap-x-4 overflow-hidden rounded-md bg-neutral-400/5 p-3 transition hover:bg-neutral-400/10'
    >
      <figcaption className='relative aspect-square h-full w-full overflow-hidden rounded-md'>
        <Image
          className='object-cover'
          src={imagePath || '/images/music-placeholder.png'}
          fill
          alt='Image'
        />
      </figcaption>

      <div className='flex w-full flex-col items-start gap-y-1 pt-4'>
        <p className='w-full truncate font-semibold'>{song.title}</p>

        <p className='w-full truncate pb-4 text-sm text-neutral-400'>
          By {song.author}
        </p>
      </div>

      <div className='absolute bottom-24 right-5'>
        <PlayButton />
      </div>
    </article>
  )
}

export default SongItem
