'use client'

import Image from 'next/image'
import usePlayer from '../Player/usePlayer.hook'
import useLoadImage from '../Song/useLoadImage.hook'

const MediaItem = ({ song, onClick }) => {
  const player = usePlayer()
  const imageUrl = useLoadImage(song)

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id)
    }

    return player.setId(song.id)
  }

  return (
    <li
      onClick={handleClick}
      className='flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 transition hover:bg-neutral-700'
    >
      <figure className='relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md'>
        <Image
          fill
          src={imageUrl || 'images/liked.png'}
          alt={song.title}
          className='object-cover'
        />
      </figure>

      <article className='flex flex-1 flex-col'>
        <h2 className='truncate text-sm font-medium text-neutral-100'>
          {song.title}
        </h2>
        <p className='truncate text-xs text-neutral-400'>By {song.author}</p>
      </article>
    </li>
  )
}

export default MediaItem
