'use client'

import { useEffect, useState } from 'react'
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import useSound from 'use-sound'
import { LikeButton } from '../LikeButton'
import MediaItem from '../Sidebar/MediaItem'
import Slider from './Slider'
import usePlayer from './usePlayer.hook'

const PlayerContent = ({ songUrl, key, song }) => {
  const player = usePlayer()

  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)

  const Icon = isPlaying ? BsPauseFill : BsPlayFill
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave

  const onPlayNext = () => {
    if (player.ids.length === 0) return

    const currentSong = player.ids.findIndex((id) => id === player.activeId)
    const nextSong = player.ids[currentSong + 1]

    if (!nextSong) return player.setId(player.ids[0])

    player.setId(nextSong)
  }

  const onPlayPrev = () => {
    if (player.ids.length === 0) return

    const currentSong = player.ids.findIndex((id) => id === player.activeId)
    const prevSong = player.ids[currentSong - 1]

    if (!prevSong) return player.setId(player.ids[player.ids.length - 1])

    player.setId(prevSong)
  }

  const [play, { pause, sound }] = useSound(songUrl, {
    volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false)
      onPlayNext()
    },
    onpause: () => setIsPlaying(false),
    format: ['mp3']
  })

  useEffect(() => {
    sound?.play()

    return () => {
      sound?.unload()
    }
  }, [sound])

  const handlePlay = () => {
    if (!isPlaying) {
      play()
    } else {
      pause()
    }
  }

  const handleVolume = (e) => {
    if (volume === 0) {
      setVolume(1)
    } else {
      setVolume(0)
    }
  }

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
          onClick={handlePlay}
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
          onClick={onPlayPrev}
          size={30}
          className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
        />

        <button
          onClick={handlePlay}
          className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 transition hover:bg-neutral-200'
        >
          <Icon
            size={30}
            className='text-black'
          />
        </button>

        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
        />
      </article>

      <article className='hidden w-full justify-end pr-2 md:flex'>
        <button className='flex w-[120px] items-center gap-x-4'>
          <VolumeIcon
            onClick={handleVolume}
            size={30}
            className='cursor-pointer text-neutral-400 transition hover:text-neutral-200'
          />

          <Slider
            value={volume}
            onChange={(value) => setVolume(value)}
          />
        </button>
      </article>
    </footer>
  )
}

export default PlayerContent
