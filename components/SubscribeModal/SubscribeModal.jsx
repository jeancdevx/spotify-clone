'use client'

import useUser from '@/hooks/useUser.hook'
import { postData } from '@/libs/helpers'
import { getStripe } from '@/libs/stripeClient'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Button } from '../Button'
import { Modal } from '../Modal'
import useSubscribeModal from './useSubscribeModal.hook'

const formatPrice = (price) => {
  const priceString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0
  }).format((price?.unit_amount || 0) / 100)

  return priceString
}

const SubscribeModal = ({ products }) => {
  const subscribeModal = useSubscribeModal()
  const { user, isLoading, subscription } = useUser()

  const [priceIdLoading, setPriceIdLoading] = useState()

  const onChange = (open) => {
    if (!open) {
      subscribeModal.onClose()
    }
  }

  const handleCheckout = async (price) => {
    setPriceIdLoading(price.id)
    if (!user) {
      setPriceIdLoading(undefined)
      return toast.error('Must be logged in')
    }

    if (subscription) {
      setPriceIdLoading(undefined)
      return toast('Already subscribed')
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      })

      const stripe = await getStripe()
      stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      return toast.error(error?.message)
    } finally {
      setPriceIdLoading(undefined)
    }
  }

  let content = (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <hr className='w-full bg-neutral-900' />

      <h2 className='text-center text-2xl font-bold text-emerald-600'>
        No products available
      </h2>
    </div>
  )

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No prices available</div>
          }

          return product.prices.map((price) => (
            <Button
              key={price.id}
              onClick={() => handleCheckout(price)}
              disabled={isLoading || price.id === priceIdLoading}
              className='mb-4'
            >
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ))
        })}
      </div>
    )
  }

  if (subscription) {
    content = (
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <hr className='w-full bg-neutral-900' />

        <h2 className='text-center text-2xl font-bold text-emerald-600'>
          Already subscribed.
        </h2>
      </div>
    )
  }

  return (
    <Modal
      title='Only for premium users'
      description='Listen to music with Spotify Premium'
      isOpen={subscribeModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  )
}

export default SubscribeModal
