import {Nunito} from 'next/font/google'

import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './provider/ToasterProvider'

const font = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'airbnb-clone',
  description: 'create by Henry Lee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar  />
      </ClientOnly>
      {children}
      </body>
    </html>
  )
}
