'use client'

import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Modal } from '.'
import useAuthModal from './useAuthModal.hook'

const AuthModal = () => {
  const supabaseClient = useSupabaseClient()

  const router = useRouter()

  const { session } = useSessionContext()

  const { onClose, isOpen } = useAuthModal()

  useEffect(() => {
    if (session) {
      router.refresh()

      onClose()
    }
  }, [session, router, onClose])

  const onChange = (open) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Modal
      title='Welcome back'
      description='Log in to your account'
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        theme='dark'
        magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#499464',
                anchorTextHoverColor: '#499464'
              },
              radii: {
                borderRadiusButton: '.5rem',
                buttonBorderRadius: '.5rem',
                inputBorderRadius: '.5rem'
              }
            }
          },
          style: {
            anchor: {
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '.80rem',
              transition: 'all .2s ease-in-out'
            }
          }
        }}
        providers={['github']}
      />
    </Modal>
  )
}

export default AuthModal
