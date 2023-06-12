'use client'

import { SongItem } from '@/components/Song'

const PageContent = ({ songs }) => {
  if (songs.length === 0) {
    return <p className='mt-4 text-neutral-400'>No songs to display</p>
  }

  return (
    <div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={() => {}}
          song={song}
        />
      ))}
    </div>
  )
}

export default PageContent
