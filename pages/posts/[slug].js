/* eslint-disable react/display-name */
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../helpers/formatDate'

const graphcms = new GraphQLClient(process.env.customKey)

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
  `)

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: false
  }
}

const Post = ({ post }) => {
  return (
    <section className='p-16 xl:px-96 2xl:px-96 lg:px-72'>
      <NextSeo
        title={`Kelli Landry - Blog: ${post.title}`}
        canonical={`http://kellilandry.dev/posts/${post.slug}`}
      />
      <section className='flex flex-row justify-between items-center h-12'>
        <h1 className='text-lg text-indigo-500 dark:text-indigo-300'>{post.title}</h1>
        <h4 className='text-sm text-indigo-600 dark:text-indigo-50'>{formatDate(post.date)}</h4>
        <div className='text-indigo-800 cursor-pointer'>
          <Link href='/posts'>back to posts</Link>
        </div>
      </section>
      <article className='pb-4 text-left'>
        <RichText
          content={post.content.raw.children}
          renderers={{
            code: ({ children }) => <code className='inline-block text-xs p-0.5 bg-indigo-500 text-indigo-200'>{children}</code>,
            img: ({ src, altText, height, width }) => (
              <div className='w-full flex justify-center'>
                <Image src={src} alt={altText} height={height} width={width} objectFit='cover' />
              </div>
            ),
            ol: ({ children }) => <ol className='pl-0 dark:text-indigo-50'>{children}</ol>,
            li: ({ children }) => <li className='p-3 dark:text-indigo-50'>{children}</li>,
            p: ({ children }) => <p className='leading-7 my-7 dark:text-indigo-50'>{children}</p>,
          }}
        />
      </article>
      <div className='text-indigo-800 font-light cursor-pointer hover:underline'>
        <Link href='/posts'>back to posts</Link>
      </div>
    </section>
  )
}

export default Post
