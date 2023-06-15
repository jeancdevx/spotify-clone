'use client'

import { LikeButton } from '@/components/LikeButton'
import useOnPlay from '@/components/Player/useOnPlay'
import MediaItem from '@/components/Sidebar/MediaItem'

const SearchContent = ({ songs }) => {
  const onPlay = useOnPlay(songs)

  if (songs.length === 0) {
    return (
      <section className='text-center'>
        <h2 className='text-6xl font-bold'>No songs found</h2>
        <p className='text-md mt-4 text-neutral-400'>
          Try adjusting your search query
        </p>
      </section>
    )
  }

  return (
    <section className='flex w-full flex-col gap-y-2 px-6 pb-6'>
      {songs.map((song) => (
        <article
          key={song.id}
          className='flex w-full items-center gap-x-4'
        >
          <div className='flex-1'>
            <MediaItem
              onClick={(id) => onPlay(id)}
              song={song}
            />
          </div>

          <LikeButton songId={song.id} />
        </article>
      ))}
    </section>
  )
}

export default SearchContent
