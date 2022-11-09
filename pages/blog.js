import Head from 'next/head'
import Link from 'next/link'
import Section from '../components/section'
import Menu from '../components/menu'
import utilityStyles from '../styles/Utilities.module.css'
import sectionStyles from '../components/section.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}


export default function Home({allPostsData}) {
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
          <div>
            <ul className={utilityStyles['list-no-bullets']}>
              {allPostsData.map(({ id, description, title, date }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`} className={`${utilityStyles.link} ${sectionStyles['section-text']}`}>{title}</Link>
                  <br />
                  {description}
                  <br />
                  <span className={utilityStyles['small-italic']}>{date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
    </div>
  )
}
