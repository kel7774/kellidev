import Link from 'next/link'
import Image from 'next/image'

import formatDate from '../pages/helpers/formatDate';

function PostPreview({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <section key={post.id} className='w-1/2 flex flex-row justify-between xs:flex xs:flex-col xs:w-full'>
          <div className='xs:flex xs:justify-center'>
            <Image src={post.coverImage.url} alt={`Cover photo for ${post.title}`} layout='fixed' className='rounded-xl' height='200' width='200' />
          </div>
          <div className="xs:mt-5 xs:text-center">
            <p className='dark:text-indigo-50 mb-4'>📅 {formatDate(post.date)}</p>
            <Link
              key={post.id}
              as={`/posts/${post.slug}`}
              href='/posts/[slug]'
              passHref
              className='cursor-pointer font-bold text-4xl dark:text-indigo-50 dark:hover:text-indigo-300'>
              🖋 {post.title}
            </Link>
            <p className='text-xl mb-4 dark:text-indigo-50'>{post.excerpt}</p>
            <Link
              key={post.id}
              as={`/posts/${post.slug}`}
              href='/posts/[slug]'
              passHref
              className='cursor-pointer font-bold text-xl dark:text-indigo-50 underline hover:no-underline xs:pb-5'>
              read more
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}


export default PostPreview;
