import { Header } from '@/components/Header'
import AccountContent from './components/AccountContent'

const Account = () => {
  return (
    <main className='mx-2 flex h-full w-auto flex-col gap-y-4 overflow-hidden overflow-y-auto rounded-md bg-neutral-800 md:mx-0 md:mr-2'>
      <Header className='from-neutral-700'>
        <article className='mb-2 flex flex-col gap-y-6'>
          <h1 className='text-3xl font-bold text-white'>Account Settings</h1>
        </article>
      </Header>

      <AccountContent />
    </main>
  )
}

export default Account
