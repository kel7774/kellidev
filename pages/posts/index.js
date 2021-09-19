import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
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
    <div className='flex flex-row justify-evenly flex-wrap py-4 px-4'>
      <NextSeo
        title='Kelli Landry - Blog'
        description='A blog written by Kelli Landry about self-taught frontend web development'
        canonical='http://kellilandry.dev/posts'
      />
      {posts.map((post) => {
        return (
          <article className='pb-7' key={post.id}>
            <section className='flex flex-col w-60 h-full border border-indigo-600 bg-indigo-200 rounded-xl hover:bg-indigo-600 hover:text-indigo-200 text-center p-5'>
              <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]' className='text-indigo-600 font-light'>
                <div className='font-light text-sm'>
                  <Image src={post.coverImage.url} height='200' width='200' alt='Cover Photo for blog post' className='rounded-xl cursor-pointer' />
                  {post.title}
                </div>
              </Link>
              <div>
                <div className='text-xs font-bold'>{formatDate(post.date)}</div>
                <div className='text-xs'>{post.excerpt}</div>
              </div>
            </section>
          </article>
        )
      })}
    </div>
  )
}

export default Posts
