import { useSupabaseClient } from '@supabase/auth-helpers-react'

const useLoadImage = (song) => {
  const supabaseClient = useSupabaseClient()

  if (!song) return null

  const { data: imageData, error } = supabaseClient.storage
    .from('images')
    .getPublicUrl(song.image_path)

  if (error) {
    console.log(error)
    return null
  }

  return imageData.publicUrl
}

export default useLoadImage
