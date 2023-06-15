'use client'

import useUser from '@/hooks/useUser.hook'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'
import useAuthModal from '../Modal/useAuthModal.hook'
import useOnPlay from '../Player/useOnPlay'
import useUploadModal from '../UploadModal/useUploadModal.hook'
import MediaItem from './MediaItem'

const Library = ({ songs }) => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const { user } = useUser()
  const onPlay = useOnPlay(songs)

  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    // todo: check for subscription

    return uploadModal.onOpen()
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
          className='h-4 w-4 cursor-pointer text-neutral-400 transition hover:text-neutral-300'
          onClick={onClick}
        />
      </header>

      <ul className='mt-4 flex flex-col gap-y-2 px-3'>
        {songs.map((song) => (
          <MediaItem
            key={song.id}
            song={song}
            onClick={(id) => onPlay(id)}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Library
