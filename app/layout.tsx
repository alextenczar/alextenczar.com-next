import '../styles/globals.scss'
import { Inter } from '@next/font/google'
import Nav from './components/Nav';
import Scroll from './components/scroll';

const inter = Inter({ 
subsets: ['latin'],
variable: '--inter-font' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <Scroll></Scroll>
      </head>
      <body>
      <header>
        <Nav/>
      </header>
        <div className="content-wrapper">
        {children}
        </div>
      </body>
    </html>
  )
}
