import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import readingTime from 'reading-time'

import formatDate from '../helpers/formatDate'

const graphcms = new GraphQLClient(process.env.customKey)

export async function getStaticProps () {
  const { posts } = await graphcms.request(
    `
    query Posts() {
      posts (orderBy: date_DESC) {
        id
        date
        title
        excerpt
        content {
          text
        }
        slug
        coverImage {
          id
          url
        }
      }
    }
  `
  )
  return {
    props: {
      posts
    }
  }
}

const Posts = ({ posts }) => {
  return (
    <div className='block'>
      <NextSeo
        title='Kelli Landry - Blog'
        description='A blog written by Kelli Landry about self-taught frontend web development'
        canonical='http://kellilandry.dev/posts'
      />
      <div className='flex flex-col'>
        {posts.map((post) => (
          <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]' passHref>
            <section className='flex flex-row xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:items-center sm:items-center md:items-center pb-7 pt-4 w-2/4 m-blog dark:text-indigo-50'>
              <div className='pr-4'>
                <Image src={post.coverImage.url} height='200' width='200' alt='Cover Photo for blog post' className='rounded-xl cursor-pointer' layout='fixed' />
              </div>
              <div className='pr-5'>{formatDate(post.date)}</div>
              <div className='cursor-pointer'>
                <header className='underlineTitle text-lg hover:text-indigo-50 flex flex-row justify-between'>
                  <span>{post.title}</span>
                  <span>{readingTime(post.content.text).text}</span>
                </header>
                <div className='text-sm'>{post.excerpt}</div>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts
