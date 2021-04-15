import Head from 'next/head'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Navbar, { NavbarProps } from './Navbar'

interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  navbar?: boolean
  navbarProps?: NavbarProps
}

function Layout({ navbar = true, navbarProps, ...props }: LayoutProps) {
  return (
    <>
      <Head>
        <title>dmulvad.com - Daniel Mulvad</title>
      </Head>
      {navbar && <Navbar {...navbarProps} />}
      <main {...props} />
    </>
  )
}

export default Layout
