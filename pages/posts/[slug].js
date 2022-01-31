/* eslint-disable react/display-name */
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { useRouter } from "next/router";
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
  const router = useRouter()
  
  return (
    <section className='p-16 xl:px-96 2xl:px-96 lg:px-72'>
      <NextSeo
        title={`Kelli Landry - Blog: ${post.title}`}
        canonical={`http://kellilandry.dev/posts/${post.slug}`}
      />
      <h1 className='text-lg my-5 text-indigo-500 dark:text-indigo-300'>{post.title}</h1>
      <section className='flex flex-row justify-between items-center h-12'>
        <h4 className='text-sm font-bold text-indigo-600 dark:text-indigo-50'>{formatDate(post.date)}</h4>
        <button className='border-indigo-500 dark:border-indigo-800  dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-400 hover:border-indigo-300 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={() => router.push('/posts')}>back to posts</button>
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
      <button className='border-indigo-500 dark:border-indigo-800  dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 dark:hover:bg-indigo-400 hover:border-indigo-300 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={() => router.push('/posts')}>back to posts</button>
    </section>
  )
}

export default Post
