import './globals.css'
import { Inter } from 'next/font/google'

import { Provider } from 'react-redux'
import store from '../redux/store'
import Providers from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers></body>
    </html>
  )
}
