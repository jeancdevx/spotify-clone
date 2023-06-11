import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const SidebarItem = ({ Icon, label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white',
        active && 'text-white'
      )}
    >
      <Icon className='h-6 w-6' />
      <span>{label}</span>
    </Link>
  )
}

export default SidebarItem
