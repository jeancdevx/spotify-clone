/* eslint-disable react/jsx-handler-names */
'use client'

import { Button } from '@/components/Button'
import useSubscribeModal from '@/components/SubscribeModal/useSubscribeModal.hook'
import useUser from '@/hooks/useUser.hook'
import { postData } from '@/libs/helpers'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const getNameFromEmail = (email) => {
  const [name] = email.split('@')
  return name
}

const AccountContent = () => {
  const router = useRouter()
  const subscribeModal = useSubscribeModal()
  const { isLoading, subscription, user } = useUser()

  const [loading, setLoading] = useState(false)

  console.log('user', user)

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [isLoading, user, router])

  const redirectToCustomerPortal = async () => {
    setLoading(true)
    try {
      const { url } = await postData({
        url: '/api/create-portal-link'
      })

      window.location.assign(url)
    } catch (error) {
      if (error) return alert(error.message)
    }
    setLoading(false)
  }

  return (
    <div className='mb-7 px-6'>
      {!subscription && (
        <div className='flex flex-col gap-y-4'>
          <p>No active plan.</p>
          <Button
            onClick={subscribeModal.onOpen}
            className='w-[300px]'
          >
            Subscribe
          </Button>
        </div>
      )}
      {subscription && (
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4'>
            <Image
              src='/images/liked.png'
              alt='user image'
              className='rounded-full object-cover'
              width={200}
              height={200}
            />

            <div className='flex w-full flex-col items-start justify-between md:h-[150px]'>
              <p className='text-gray-500'>Account</p>

              <h2 className='text-2xl font-bold'>
                {getNameFromEmail(user.email)}
              </h2>

              <div className='hidden flex-wrap justify-start gap-y-2 md:flex'>
                <div className='mr-4 w-auto rounded-full border-2 border-green-500 px-4 py-1 text-center font-semibold'>
                  <p className='text-sm text-neutral-200'>{user?.role}</p>
                </div>

                <div className='w-auto rounded-full border-2 border-green-500 px-4 py-1 text-center font-semibold'>
                  <p className='text-sm text-neutral-200'>
                    {subscription?.prices?.products?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p>
            You are currently on the
            <b> {subscription?.prices?.products?.name} </b>
            plan.
          </p>
          <Button
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
            className='w-full max-w-[300px] md:w-[300px]'
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  )
}

export default AccountContent
