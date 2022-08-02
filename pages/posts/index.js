import React from 'react'
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import readingTime from 'reading-time'

import About from '../../components/About';
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
  const [hidden, setHidden] = React.useState(true);
  
  const handleClick = () => {
    setHidden(!hidden);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <NextSeo
        title='lowercase and emoji taste'
        description='lowercase and emoji taste is a blog including but not limited to tech topics, and will include life experience, practical knowledge, and center on neuro-divergence, women in STEM, self-taught learners, and people who are hesitant to enter the tech space'
        canonical='http://kellilandry.dev/posts'
      />
      <div className='h-80 w-2/3 mb-12 bg-indigo-300 dark:bg-indigo-700 dark:text-indigo-200 flex flex-col justify-center items-center'>
        <header className='text-4xl font-bold dark:text-indigo-200'>✨ lowercase & emoji taste 💅</header>
        <p className='text-xl dark:text-indigo-200'>a developer blog for misfits, self-taught searchers, & neuro-divergent folks trying to stay above water in tech</p>
        <button className='xs:mr-1 mt-8 mr-4 p-3 w-36 border-indigo-500 dark:border-indigo-800 dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 hover:border-indigo-300 dark:hover:bg-indigo-400 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={handleClick}>{hidden ? 'about l&et' : 'blog'}</button>
      </div>
      <div className='w-2/3'>
        {hidden ? (
          <div className='text-center'>
            <header className='font-bold dark:text-indigo-200 text-4xl'>coming back soon!</header>
          </div>
        ) : <About />}
      </div>
    </div>
    // <div className='block'>

    //   <div className='flex flex-col'>
    //     {posts.map((post) => (
    //       <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]' passHref>
    //         <section className='flex flex-row xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:items-center sm:items-center md:items-center pb-7 pt-4 w-2/4 m-blog dark:text-indigo-50'>
    //           <div className='pr-4'>
    //             <Image src={post.coverImage.url} height='200' width='200' alt='Cover Photo for blog post' className='rounded-xl cursor-pointer' layout='fixed' />
    //           </div>
    //           <div className='pr-5'>{formatDate(post.date)}</div>
    //           <div className='cursor-pointer'>
    //             <header className='underlineTitle text-lg hover:text-indigo-50 flex flex-row justify-between'>
    //               <span>{post.title}</span>
    //               <span>{readingTime(post.content.text).text}</span>
    //             </header>
    //             <div className='text-sm'>{post.excerpt}</div>
    //           </div>
    //         </section>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  )
}

export default Posts
