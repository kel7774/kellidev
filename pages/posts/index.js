import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../helpers/formatDate'
import classes from '../../styles/PostPreview.module.css'

const graphcms = new GraphQLClient(process.env.customKey)

export async function getStaticProps () {
  const { posts } = await graphcms.request(
    `
    query Posts() {
      posts {
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
    <div>
      {posts.map((post) => {
        return (
          <article key={post.id} className={classes.article}>
            <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]'>
              <a>
                <div className={classes.image}>
                  <Image src={post.coverImage.url} width='200px' height='200px' alt='Cover Photo for blog post' />
                </div>
                <div>{post.title}</div>
              </a>
            </Link>
            <section className={classes.section}>
              <div>{formatDate(post.date)}</div>
              <div>{post.excerpt}</div>
            </section>
          </article>
        )
      })}
    </div>
  )
}

export default Posts
