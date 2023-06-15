'use client'

import { Box } from '@/components/Box'
import Link from 'next/link'

export default function Error() {
  return (
    <Box className='flex h-full flex-col items-center justify-center gap-y-8'>
      <div className='text-center text-neutral-500'>
        <h1 className='bg-gradient-to-r from-neutral-600 to-neutral-400 bg-clip-text text-9xl font-bold text-transparent'>
          404
        </h1>

        <p className='bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text text-2xl font-bold text-transparent'>
          Page not found
        </p>
      </div>
      <Link
        href='/'
        className='text-md rounded-full bg-gradient-to-r from-green-700 to-green-600 px-4 py-2 font-bold text-black'
      >
        Go back home
      </Link>
    </Box>
  )
}
