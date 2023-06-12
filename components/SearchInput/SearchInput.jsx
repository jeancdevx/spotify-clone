'use client'

import { useRouter } from 'next/navigation'
import qs from 'query-string'
import { useEffect, useState } from 'react'
import { Input } from '../Input'
import useDebounce from './useDebounce'

const SearchInput = () => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const debounceValue = useDebounce(searchInput, 500)

  useEffect(() => {
    const query = {
      title: debounceValue
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query
    })

    router.push(url)
  }, [debounceValue, router])

  return (
    <Input
      placeholder='What do you want to listen to?'
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  )
}

export default SearchInput
