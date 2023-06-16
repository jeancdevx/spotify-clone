/* eslint-disable multiline-ternary */
'use client'

import useUser from '@/hooks/useUser.hook'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { BiSearch } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button'
import useAuthModal from '../Modal/useAuthModal.hook'
import usePlayer from '../Player/usePlayer.hook'

const Header = ({ children, className }) => {
  const { onOpen } = useAuthModal()

  const router = useRouter()

  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const player = usePlayer()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()

    player.reset()
    router.refresh()

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Logged out successfully')
    }
  }

  return (
    <header
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-900 p-6',
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
            <Link
              href='/'
              className='flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-opacity hover:opacity-75'
            >
              <HiHome className='h-5 w-5 text-black' />
            </Link>
          </li>
          <li>
            <Link className='flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-opacity hover:opacity-75'>
              <BiSearch className='h-5 w-5 text-black' />
            </Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-x-4'>
          {user ? (
            <div className='flex items-center gap-x-4'>
              <Button
                onClick={handleLogout}
                className='bg-white px-6 py-2'
              >
                Log out
              </Button>

              <Button
                className='flex h-10 w-10 items-center justify-center rounded-full bg-white'
                onClick={() => router.push('/account')}
              >
                <FaUserAlt className='h-5 w-5' />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className='bg-transparent font-medium text-neutral-300'
                  onClick={onOpen}
                >
                  Sign up
                </Button>
              </div>

              <div>
                <Button
                  className='bg-white px-6 py-2'
                  onClick={onOpen}
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </nav>

      {children}
    </header>
  )
}

export default Header
