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
        <Section title='About Me' inverted={true}>
          <div>
            <Image 
              src='/images/pixel-pc.png' 
              width={144}
              height={144}
              alt='Pixelated computer graphic'
              className={sectionStyles['section-image']}
            />
          </div>
          <p className={sectionStyles['section-text']}>
            My name is Aaron Noyes. I am a software developer based in Winnipeg. I studied Computer Science
            at the University of Manitoba, specializing in Networks & Security, and
            Artificial Intelligence. In my free time, I enjoy writing software and
            learning about current software security trends.
            <br />
            <br />
            Most of my schooling involved programming in Java and C. For personal
            interest, I have spent time learning Javascript/Typscript and working
            on web development. Because I enjoy lower level programming,
            I also work with Rust and C, learning about operating systems and emulator
            development.
          </p>
        </Section>
        <Section title='Projects'>
          <p className={sectionStyles['section-text']}>
          Here are some samples of my work. More can be found on my Github profile.
            </p>
        </Section>
      </main>
    </div>
  )
}
