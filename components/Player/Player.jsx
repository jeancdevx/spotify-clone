'use client'

import useGetSongById from '@/components/Player/useGetSongById.hook'
import PlayerContent from './PlayerContent'
import useLoadSongUrl from './useLoadSongUrl.hook'
import usePlayer from './usePlayer.hook'

const Player = () => {
  const player = usePlayer()
  const { song } = useGetSongById(player.activeId)

  const songUrl = useLoadSongUrl(song)

  if (!song || !songUrl || !player.activeId) return null

  return (
    <div className='fixed bottom-0 z-50 h-[80px] w-full bg-black px-4 py-2 '>
      <PlayerContent
        song={song}
        songUrl={songUrl}
        key={songUrl}
      />
    </div>
  )
}

export default Player
