import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Noyes</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Aaron Noyes</h1>
        <p>
          Personal Portfolio
        </p>
      </main>
    </div>
  )
}
