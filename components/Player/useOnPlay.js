import useUser from '@/hooks/useUser.hook'
import useAuthModal from '../Modal/useAuthModal.hook'
import usePlayer from './usePlayer.hook'

const useOnPlay = (songs) => {
  const player = usePlayer()
  const authModal = useAuthModal()
  const { user } = useUser()

  const onPlay = (songId) => {
    if (!user) {
      authModal.onOpen()
      return
    }

    player.setId(songId)
    player.setIds(songs.map((song) => song.id))
  }

  return onPlay
}

export default useOnPlay
