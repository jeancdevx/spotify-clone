import getLikedSongs from '@/actions/getLikedSongs'
import { Header } from '@/components/Header'
import Image from 'next/image'
import LikedContent from './components/LikedContent'

export const revalidate = 0

const Liked = async () => {
  const songs = await getLikedSongs()

  return (
    <main className='mx-2 flex h-full w-auto flex-col gap-y-4 overflow-hidden overflow-y-auto rounded-md bg-neutral-800 md:mx-0 md:mr-2'>
      <Header className='from-neutral-700'>
        <section className='mt-20'>
          <article className='flex flex-col items-center gap-x-5 md:flex-row'>
            <figure className='relative h-32 w-32 lg:h-44 lg:w-44'>
              <Image
                fill
                src='/images/liked.png'
                alt='playlist liked songs'
                className='object-cover'
              />
            </figure>

            <div className='mt-4 flex flex-col gap-y-2 md:mt-0'>
              <p className='hidden text-xl font-bold text-neutral-100 md:block'>
                Playlist
              </p>

              <h1 className='text-4xl font-bold text-neutral-100'>
                Liked Songs
              </h1>
            </div>
          </article>
        </section>
      </Header>

      <LikedContent songs={songs} />
    </main>
  )
}

export default Liked
