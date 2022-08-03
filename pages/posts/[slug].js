/* eslint-disable react/display-name */
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { useRouter } from "next/router";
import Image from 'next/image'
import readingTime from 'reading-time'

import formatDate from '../helpers/formatDate'

const graphcms = new GraphQLClient(process.env.customKey)

// TODO: style for mobile

export async function getStaticProps ({ params }) {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content{
          text
          raw
        }
        slug
        coverImage {
          id
          url
        }
        author {
          id
          name
        }
        date
      }
    }
  `,
    {
      slug: params.slug
    }
  )

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths () {
  const { posts } = await graphcms.request(`
    {
      posts {
        id
        title
        content{
          text
        }
        slug
        coverImage {
          url
        }
        author {
          name
        }
        date
      }
    }
  `)

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: false
  }
}

const Post = ({ post }) => {
  const router = useRouter()

  const postToText = post.content.text
  const readTime = readingTime(postToText)

  return (
    <article className='flex flex-col justify-center items-center'>
      <NextSeo
        title={`Kelli Landry - Blog: ${post.title}`}
        canonical={`http://kellilandry.dev/posts/${post.slug}`}
      />
      <div className='h-80 w-2/3 mb-12 bg-indigo-300 dark:bg-indigo-700 dark:text-indigo-200 flex flex-col justify-center items-center'>
        <header className='text-4xl font-bold dark:text-indigo-200'>{post.title}</header>
        <div className='flex flex-row mb-4'>
          <p className='mr-2 text-xl dark:text-indigo-200'>{formatDate(post.date)}</p>
          <p className='ml-2 text-xl dark:text-indigo-200'>{readTime.text}</p>
        </div>
        <button className='border-indigo-500 dark:border-indigo-800  dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-400 hover:border-indigo-300 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={() => router.push('/posts')}>back to posts</button>
      </div>
      <section className='w-2/3'>
        <RichText
          content={post.content.raw.children}
          renderers={{
            code: ({ children }) => <code className='inline-block text-2xl p-0.5 bg-indigo-500 text-indigo-200'>{children}</code>,
            img: ({ src, altText, height, width }) => (
              <div className='w-full flex justify-center'>
                <Image src={src} alt={altText} height={height} width={width} objectFit='cover' />
              </div>
            ),
            ol: ({ children }) => <ol className='pl-0 text-2xl dark:text-indigo-50'>{children}</ol>,
            li: ({ children }) => <li className='p-3 text-2xl dark:text-indigo-50'>{children}</li>,
            p: ({ children }) => <p className='leading-9 my-7 text-2xl dark:text-indigo-50'>{children}</p>,
          }}
        />
        <button className='border-indigo-500 dark:border-indigo-800  dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-400 hover:border-indigo-300 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase mb-7' onClick={() => router.push('/posts')}>back to posts</button>
      </section>
    </article>
  )
}

export default Post
