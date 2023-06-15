'use client'

import useOnPlay from '@/components/Player/useOnPlay'
import { SongItem } from '@/components/Song'

const PageContent = ({ songs }) => {
  const onPlay = useOnPlay(songs)

  if (songs.length === 0) {
    return <p className='mt-4 text-neutral-400'>No songs to display</p>
  }

  return (
    <section className='mb-24 mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id) => onPlay(id)}
          song={song}
        />
      ))}
    </section>
  )
}

export default PageContent
