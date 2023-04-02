import {Nunito} from 'next/font/google'

import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import LoginModal from './components/modals/LoginModal'

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
        <Navbar  />
      </ClientOnly>
      {children}
      </body>
    </html>
  )
}
