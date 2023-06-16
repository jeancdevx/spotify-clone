import useUser from '@/hooks/useUser.hook'
import useAuthModal from '../Modal/useAuthModal.hook'
import useSubscribeModal from '../SubscribeModal/useSubscribeModal.hook'
import usePlayer from './usePlayer.hook'

const useOnPlay = (songs) => {
  const player = usePlayer()
  const authModal = useAuthModal()
  const subscribeModal = useSubscribeModal()
  const { user, subscription } = useUser()

  const onPlay = (songId) => {
    if (!user) {
      authModal.onOpen()
      return
    }

    if (!subscription) {
      subscribeModal.onOpen()
      return
    }

    player.setId(songId)
    player.setIds(songs.map((song) => song.id))
  }

  return onPlay
}

export default useOnPlay
