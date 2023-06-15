'use client'

import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { LikeButton } from '../LikeButton'
import MediaItem from '../Sidebar/MediaItem'
import Slider from './Slider'

const PlayerContent = ({ songUrl, key, song }) => {
  const Icon = false ? BsPauseFill : BsPlayFill
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave

  return (
    <footer className='z-50 grid h-full grid-cols-2 md:grid-cols-3'>
      <section className='flex w-screen justify-start gap-x-2 px-2'>
        <article className='flex items-center gap-x-4'>
          <MediaItem song={song} />

          <LikeButton songId={song.id} />
        </article>
      </section>

      <article className='col-auto flex w-full items-center justify-end md:hidden'>
        <button
          onClick={() => {}}
          className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-1'
        >
          <Icon
            size={30}
            className='text-black'
          />
        </button>
      </article>

      <article className='hidden w-full items-center justify-center gap-x-6 md:flex'>
        <AiFillStepBackward
          size={30}
          className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
        />

        <button
          onClick={() => {}}
          className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 transition hover:bg-neutral-200'
        >
          <Icon
            size={30}
            className='text-black'
          />
        </button>

        <AiFillStepForward
          onClick={() => {}}
          size={30}
          className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
        />
      </article>

      <article className='hidden w-full justify-end pr-2 md:flex'>
        <button className='flex w-[120px] items-center gap-x-4'>
          <VolumeIcon
            onClick={() => {}}
            size={30}
            className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
          />

          <Slider />
        </button>
      </article>
    </footer>
  )
}

export default PlayerContent
