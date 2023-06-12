'use client'

import useUser from '@/hooks/useUser.hook'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useAuthModal from '../Modal/useAuthModal.hook'

const LikeButton = ({ songId }) => {
  const router = useRouter()
  const { supabaseClient } = useSessionContext()
  const authModal = useAuthModal()
  const { user } = useUser()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (!user?.id) {
      return
    }

    const fetchLikedSongs = async () => {
      const { data: likedSongs, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single()

      if (!error && likedSongs) {
        setIsLiked(true)
      }
    }

    fetchLikedSongs()
  }, [songId, supabaseClient, user?.id])

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart

  const handleLike = async () => {
    if (!user) {
      return authModal.open()
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId)

      if (error) {
        return toast.error(error.message)
      } else {
        setIsLiked(false)
        toast.success('Song removed from your liked songs')
      }
    } else {
      const { error } = await supabaseClient.from('liked_songs').insert({
        user_id: user.id,
        song_id: songId
      })

      if (error) {
        return toast.error(error.message)
      } else {
        setIsLiked(true)
        toast.success('Song added to your liked songs')
      }
    }

    router.refresh()
  }

  return (
    <button
      onClick={handleLike}
      className='text-2xl text-neutral-100 transition hover:text-neutral-200'
    >
      <Icon color={isLiked ? '#22c55e' : '#fff'} />
    </button>
  )
}

export default LikeButton
