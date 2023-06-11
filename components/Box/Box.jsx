import { twMerge } from 'tailwind-merge'

const Box = ({ children, className }) => {
  return (
    <div
      className={twMerge('h-fit w-full rounded-lg bg-neutral-800', className)}
    >
      {children}
    </div>
  )
}

export default Box
