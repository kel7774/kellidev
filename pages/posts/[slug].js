/* eslint-disable react/display-name */
import { GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import formatDate from '../helpers/formatDate'
import classes from '../../styles/Post.module.css'

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
    <section>
      <h1>{post.title}</h1>
      <article className={classes.article}>
        <RichText
          content={post.content.raw.children}
          renderers={{
            code: ({ children }) => <code className={classes.code}>{children}</code>,
            Image: ({ src, altText, height, width }) => <Image src={src} alt={altText} height={height} width={width} />,
            ol: ({ children }) => <ol className={classes.ol}>{children}</ol>,
            li: ({ children }) => <li className={classes.li}>{children}</li>,
            p: ({ children }) => <p className={classes.p}>{children}</p>
          }}
        />
        <h4>written by {post.author.name} on {formatDate(post.date)}</h4>
      </article>
      <Link href='/posts'>back to posts</Link>
    </section>
  )
}

export default Post
