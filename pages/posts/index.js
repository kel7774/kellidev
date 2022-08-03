import React from 'react'
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'

import About from '../../components/About';
import PostPreview from '../../components/PostPreview';

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
      <div className='h-80 w-2/3 xs:w-full mb-12 xs:px-4 xs:text-center bg-indigo-300 dark:bg-indigo-700 dark:text-indigo-200 flex flex-col justify-center items-center'>
        <header className='text-4xl xs:text-xl font-bold dark:text-indigo-200'>✨ lowercase & emoji taste 💅</header>
        <p className='text-xl xs:text-lg dark:text-indigo-200'>a developer blog for misfits, self-taught searchers, & neuro-divergent folks trying to stay above water in tech</p>
        <button className='xs:mr-1 mt-8 mr-4 p-3 w-36 border-indigo-500 dark:border-indigo-800 dark:hover:border-indigo-400 bg-indigo-500 dark:bg-indigo-800 text-white tracking-widest hover:bg-indigo-300 hover:border-indigo-300 dark:hover:bg-indigo-400 hover:text-gray-900 dark:hover:text-gray-900 duration-200 ease-in aboutButtonBoxShadow uppercase' onClick={handleClick}>{hidden ? 'about l&et' : 'blog'}</button>
      </div>
      <div className='w-2/3 xs:w-10/12'>
        {hidden ? <PostPreview posts={posts} /> : <About />}
      </div>
    </div>
  )
}

export default Posts
