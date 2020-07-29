import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingSm}>
        <details className={utilStyles.details}><summary className={utilStyles.summary}>Hi 👋. My name is Soraya and I'm a Spanish front-end developer.</summary>
        <p>I'm specializing in JavaScript, React, UI design (HTML5 & CSS3, Sass, etc.) and API integration.</p>

        <p>I'm curious by nature and I take making others laugh very seriously.</p>
     
        <p>This is my first blog built with Next.js.</p>
        <p>You can also find me on <a href="https://github.com/sorayav" target="_blank"><img className={utilStyles.inLine} src="https://img.icons8.com/nolan/32/github.png" alt="Github icon" /></a> 
        <a href="https://twitter.com/SocialSoraya" target="_blank"><img className={utilStyles.inLine} src="https://img.icons8.com/nolan/32/twitter.png" alt="Twitter icon" /></a></p>
        </details>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Quick snippets:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className={utilStyles.links}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}