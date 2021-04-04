import Head from 'next/head'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Navbar from './Navbar'

function Layout(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <>
      <Head>
        <title>dmulvad.com</title>
      </Head>
      <Navbar />
      <main {...props} />
    </>
  )
}

export default Layout
