import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section'
import Menu from '../components/menu'
import utilityStyles from '../styles/Utilities.module.css'
import sectionStyles from '../components/section.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Noyes</title>
        <meta name='description' content='Personal Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main className={utilityStyles['main-container']}>
        <Section title='Blog'>
        </Section>
      </main>
    </div>
  )
}
