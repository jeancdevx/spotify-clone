'use client'

import { MyUserContextProvider } from '@/context/UserContext'

const UserProvider = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider
