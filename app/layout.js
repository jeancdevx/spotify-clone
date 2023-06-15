import getSongByUserId from '@/actions/getSongsByUserId'
import { Player } from '@/components/Player'
import { Sidebar } from '@/components/Sidebar'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
import { Figtree } from 'next/font/google'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to your favorite music for free'
}

export const revalidate = 0

export default async function RootLayout({ children }) {
  const songsData = await getSongByUserId()

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />

        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />

            <Sidebar songs={songsData}>{children}</Sidebar>

            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
