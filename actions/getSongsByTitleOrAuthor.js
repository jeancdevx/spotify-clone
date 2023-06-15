import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import getSongs from './getSongs'

const getSongsByTitleOrAuthor = async ({ query }) => {
  const supabase = createServerComponentClient({
    cookies
  })

  if (!query) {
    const allSongs = await getSongs()
    return allSongs
  }

  const { data: titleData, error: titleError } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${query}%`)
    .order('created_at', { ascending: false })

  const { data: authorData, error: authorError } = await supabase
    .from('songs')
    .select('*')
    .ilike('author', `%${query}%`)
    .order('created_at', { ascending: false })

  if (titleError || authorError) {
    console.error(titleError || authorError)
    return []
  }

  const result = new Set()
  titleData.forEach((song) => result.add(song))
  authorData.forEach((song) => result.add(song))

  return [...result]
}

export default getSongsByTitleOrAuthor
