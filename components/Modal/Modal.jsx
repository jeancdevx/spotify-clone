import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'

const Modal = ({ isOpen, onChange, title, description, children }) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onChange}
      defaultOpen={isOpen}
    >
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-40 bg-neutral-900 bg-opacity-75 backdrop-blur-sm' />

        <Dialog.Content className='fixed left-[50%] top-[50%] z-50 h-full max-h-full w-full translate-x-[-50%] translate-y-[-50%] rounded-md border border-neutral-700 bg-neutral-800 p-[25px] drop-shadow-md focus:outline-none md:h-auto md:max-h-[100vh] md:w-[90vw] md:max-w-[450px]'>
          <Dialog.Title className='mb-4 text-center text-2xl font-bold text-neutral-100'>
            {title}
          </Dialog.Title>

          <Dialog.Description className='mb-5 text-center text-sm leading-normal text-neutral-300'>
            {description}
          </Dialog.Description>

          <section>{children}</section>

          <Dialog.Close asChild>
            <button className='absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-neutral-400 transition hover:text-white focus:outline-none'>
              <IoMdClose className='h-6 w-6' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
