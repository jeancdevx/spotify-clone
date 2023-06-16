'use client'

import useUser from '@/hooks/useUser.hook'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import uniqid from 'uniqid'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import useUploadModal from './useUploadModal.hook'

const UploadModal = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('Create')
  const [imagePreview, setImagePreview] = useState(null)

  const { user } = useUser()

  const supabaseClient = useSupabaseClient()

  const uploadModal = useUploadModal()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null
    }
  })

  const onChange = (open) => {
    if (!open) {
      reset()
      setMessage('Create')
      setImagePreview(null)
      uploadModal.onClose()
    }
  }

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      setMessage('Creating...')

      const imageFile = data.image?.[0]
      const songFile = data.song?.[0]

      if (!imageFile || !songFile || !user) {
        toast.error('Please fill all fields')
        return
      }

      const uniqueID = uniqid()

      // validate file types
      if (songFile.type !== 'audio/mpeg') {
        toast.error('Please upload an mp3 file for the song')
        return
      }

      if (!imageFile.type.startsWith('image/')) {
        toast.error('Please upload an image file for the image')
        return
      }

      // upload song
      const { data: songData, error: songError } = await supabaseClient.storage
        .from('songs')
        .upload(`song-${data.title}-${uniqueID}.mp3`, songFile, {
          cacheControl: '3600',
          upsert: false
        })

      if (songError) {
        setIsLoading(false)
        setMessage('Create')

        return toast.error('Failed to upload song')
      }

      // upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from('images')
          .upload(`image-${data.title}-${uniqueID}.png`, imageFile, {
            cacheControl: '3600',
            upsert: false
          })

      if (imageError) {
        setIsLoading(false)
        setMessage('Create')

        return toast.error('Failed to upload image')
      }

      // create song
      const { error: supabaseError } = await supabaseClient
        .from('songs')
        .insert({
          user_id: user.id,
          title: data.title,
          author: data.author,
          image_path: imageData.path,
          song_path: songData.path
        })

      if (supabaseError) {
        setIsLoading(false)
        setMessage('Create')

        return toast.error('Failed to create song')
      }

      router.refresh()

      setIsLoading(false)
      setMessage('Create')

      toast.success('Song created successfully')

      reset()

      setImagePreview(null)

      uploadModal.onClose()
    } catch (error) {
      toast.error('Failed to create song')
    } finally {
      setIsLoading(false)
      setMessage('Create')
    }
  }

  const handleImagePreview = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  return (
    <Modal
      title='Upload Song'
      description='Upload your song here'
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-4'
      >
        <fieldset>
          <legend>Song Title</legend>

          <Input
            id='title'
            disabled={isLoading}
            {...register('title', { required: true })}
            placeholder='Song Title'
          />
        </fieldset>

        <fieldset>
          <legend>Author Title</legend>

          <Input
            id='author'
            disabled={isLoading}
            {...register('author', { required: true })}
            placeholder='Author Title'
          />
        </fieldset>

        <div>
          <fieldset>
            <legend>Song File</legend>

            <Input
              id='song'
              type='file'
              disabled={isLoading}
              accept='.mp3'
              {...register('song', { required: true })}
            />
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend>Image File</legend>

            <Input
              id='image'
              type='file'
              disabled={isLoading}
              accept='image/*'
              {...register('image', { required: true })}
              onChange={handleImagePreview}
            />
          </fieldset>
        </div>

        {imagePreview && (
          <Image
            src={imagePreview}
            alt='Image Preview'
            className='mx-auto rounded-md object-cover'
            width={128}
            height={128}
          />
        )}

        <Button
          type='submit'
          disabled={isLoading}
        >
          {message}
        </Button>
      </form>
    </Modal>
  )
}

export default UploadModal
