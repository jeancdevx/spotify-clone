import getSongs from '@/actions/getSongs'
import { Header } from '@/components/Header'
import { ListItem } from '@/components/ListItem'
import PageContent from './components/PageContent'

export const revalidate = 0

export default async function Home() {
  const songs = await getSongs()

  return (
    <section className='mx-2 h-full w-auto overflow-hidden overflow-y-auto rounded-md bg-neutral-800 md:mx-0 md:mr-2'>
      <Header>
        <article className='mb-2'>
          <h1 className='text-3xl font-bold text-white'>Welcome back</h1>
        </article>

        <article className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <ListItem
            image='/images/liked.png'
            name='Liked songs'
            href='liked'
          />
        </article>
      </Header>

      <section className='mb-7 mt-2 px-6'>
        <article className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-white'>Newest songs</h2>
        </article>

        <PageContent songs={songs} />
      </section>
    </section>
  )
}
