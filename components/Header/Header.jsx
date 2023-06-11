'use client'

import { useRouter } from 'next/navigation'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button'

const Header = ({ children, className }) => {
  const router = useRouter()

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <header
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <nav className='mb-4 flex w-full items-center justify-between'>
        <ul className='hidden items-center gap-x-2 md:flex'>
          <li>
            <button
              className='flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-75'
              onClick={() => router.back()}
            >
              <RxCaretLeft className='h-8 w-8' />
            </button>
          </li>
          <li>
            <button
              className='flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-75'
              onClick={() => router.forward()}
            >
              <RxCaretRight className='h-8 w-8' />
            </button>
          </li>
        </ul>

        <ul className='flex items-center gap-x-2 md:hidden'>
          <li>
            <button className='flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-opacity hover:opacity-75'>
              <HiHome className='h-5 w-5 text-black' />
            </button>
          </li>
          <li>
            <button className='flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-opacity hover:opacity-75'>
              <BiSearch className='h-5 w-5 text-black' />
            </button>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-x-4'>
          <>
            <div>
              <Button
                className='bg-transparent font-medium text-neutral-300'
                onClick={() => {}}
              >
                Sign up
              </Button>
            </div>

            <div>
              <Button
                className='bg-white px-6 py-2'
                onClick={() => {}}
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </nav>
    </header>
  )
}

export default Header
