import Head from 'next/head'
import Section from '../../components/section'
import Menu from '../../components/menu'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilityStyles from '../../styles/Utilities.module.css'
import sectionStyles from '../../components/section.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }
  

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
    return (
      <div>
        <Head>
            <title>Aaron Noyes</title>
            <meta name='description' content='Personal Portfolio' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Menu />
        <main className={utilityStyles['main-container']}>
            <Section title={postData.title}>
                <div 
                    className={sectionStyles['section-text']}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                />
            </Section>
      </main>
      </div>
    );
  }
  