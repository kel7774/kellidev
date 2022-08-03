import Link from 'next/link'
import readingTime from 'reading-time'

import formatDate from '../pages/helpers/formatDate';

function PostPreview({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <section key={post.id} className='w-1/2'>
          <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]' passHref>
            <h2 className='cursor-pointer font-bold text-4xl'>{post.title}</h2>
          </Link>
          <div className='flex flex-row mb-4 text-lg'>
            <p className='mr-2'>{formatDate(post.date)}</p>
            <p className='ml-2'>{readingTime(post.content.text).text}</p>
          </div>
          <p className='text-xl'>{post.excerpt}</p>
        </section>
      ))}
    </div>
  )
}


export default PostPreview;
