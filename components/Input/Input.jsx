import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = forwardRef(({ className, type, disabled, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        'mt-2 flex w-full cursor-pointer rounded-md border border-transparent bg-neutral-700 px-3 py-3 text-sm transition duration-150 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-50',
        className || ''
      )}
      type={type}
      disabled={disabled}
      {...rest}
    />
  )
})

Input.displayName = 'Input'

export default Input
