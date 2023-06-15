'use client'

import { LikeButton } from '@/components/LikeButton'
import useOnPlay from '@/components/Player/useOnPlay'
import MediaItem from '@/components/Sidebar/MediaItem'
import useUser from '@/hooks/useUser.hook'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LikedContent = ({ songs }) => {
  const router = useRouter()
  const { isLoading, user } = useUser()
  const onPlay = useOnPlay(songs)

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [isLoading, router, user])

  if (songs.length === 0) {
    return (
      <h1 className='mt-10 text-center text-2xl font-bold text-neutral-400'>
        You haven&apos;t liked any songs yet
      </h1>
    )
  }

  return (
    <div className='flex w-full flex-col gap-y-2 p-6'>
      {songs.map((song) => (
        <div
          key={song.id}
          className='flex w-full items-center gap-x-4 gap-y-2'
        >
          <div className='flex-1'>
            <MediaItem
              onClick={(id) => onPlay(id)}
              song={song}
            />
          </div>

          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  )
}

export default LikedContent
