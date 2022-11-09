import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section'
import Menu from '../components/menu'
import utilityStyles from '../styles/Utilities.module.css'
import sectionStyles from '../components/section.module.css'
import Project from '../components/project'

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
        <Section title='About Me' inverted={false}>
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
        <Section title='Projects' inverted={true}>
          <div>
            <p className={sectionStyles['section-text']}>
            Here are some samples of my work. More can be found on <a className={utilityStyles.link} href="https://github.com/aaronnoyes?tab=repositories">my Github profile</a>.
            </p>
            <Project 
              title="seedVPN" 
              link="https://github.com/aaronnoyes/seedVPN"
              description=" is a Virtual Private Network (VPN) that uses Transport Layer Security (TLS) to
              set up secure connectiond between a server and a number of clients. The VPN offers a variety
              of features to ensure that messages between clients and the server are delivered securely. The
              VPN also provides virtual addresses within the virtual network that may be used for
              communication. SeedVPN is based on the “Virtual Private Network Lab” described by Wenliang
              Du and other collaborators at Syracuse University"
            />
            <Project 
              title="neural-network" 
              link="https://github.com/aaronnoyes/neural-network"
              description=" is a basic neural network model written from scratch. This project is meant to
              compare learning performance of a rudimentary network using a variety of activation functions.
              There is a paper accompanying this project that explains more detail."
            />
            <Project 
              title="portfolio" 
              link="https://github.com/aaronnoyes/portfolio"
              description=" is a work-in-progress blogging tool for personal use. The
              goal of this project is to have an easy to use blogging service that does
              not rely on a Content Management System to update content. This project
              has a built in Markdown editor and privew-er sitting behind an admin portal.
              For this project, there is an emphasis on using containerization and orchestration."
            />
          </div>
        </Section>
      </main>
    </div>
  )
}
