'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { Box } from '../Box'
import Library from './Library'
import SidebarItem from './SidebarItem'

const Sidebar = ({ children, songs }) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search'
      }
    ],
    [pathname]
  )

  return (
    <div className='flex h-full'>
      <nav className='hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex'>
        <Box>
          <ul className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map(({ icon: Icon, label, active, href }) => (
              <SidebarItem
                key={label}
                Icon={Icon}
                label={label}
                active={active}
                href={href}
              />
            ))}
          </ul>
        </Box>
        <Box className='h-full overflow-y-auto'>
          <Library songs={songs} />
        </Box>
      </nav>

      <main className='h-full flex-1 overflow-y-auto bg-neutral-900 py-2'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar
