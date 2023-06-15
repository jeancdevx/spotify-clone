import { useSessionContext } from '@supabase/auth-helpers-react'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'

const useGetSongById = (id) => {
  const [isLoading, setIsLoading] = useState(false)
  const [song, setSong] = useState(undefined)

  const { supabaseClient } = useSessionContext()

  useEffect(() => {
    if (!id) return

    setIsLoading(true)

    const getSongById = async () => {
      const { data: song, error } = await supabaseClient
        .from('songs')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setIsLoading(false)
        toast.error(error.message)
      }

      setSong(song)
      setIsLoading(false)
    }

    getSongById()
  }, [id, supabaseClient])

  return useMemo(() => ({ isLoading, song }), [isLoading, song])
}

export default useGetSongById
