/* eslint-disable react/display-name */
import { GraphQLClient } from 'graphql-request'
import { NextSeo } from 'next-seo'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import formatDate from '../helpers/formatDate'
import classes from '../../styles/Post.module.css'

const graphcms = new GraphQLClient(process.env.customKey)

const OrderedList = styled.ol`
  padding-left: 0rem;
`

const StyledCode = styled.code`
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.15rem;
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
`

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
  console.log('post: ', post)
  return (
    <section>
      <NextSeo
        title={`Kelli Landry - Blog: ${post.title}`}
        canonical={`http://kellilandry.dev/posts/${post.slug}`}
      />
      <h1>{post.title}</h1>
      <article className={classes.article}>
        <RichText
          content={post.content.raw.children}
          renderers={{
            code: ({ children }) => <StyledCode>{children}</StyledCode>,
            img: ({ src, altText, height, width }) => (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Image src={src} alt={altText} height={height} width={width} objectFit='cover' />
              </div>
            ),
            ol: ({ children }) => <OrderedList>{children}</OrderedList>,
            li: ({ children }) => <li className={classes.li}>{children}</li>,
            p: ({ children }) => <p className={classes.p}>{children}</p>,
          }}
        />
        <h4>written by {post.author.name} on {formatDate(post.date)}</h4>
      </article>
      <Link href='/posts'>back to posts</Link>
    </section>
  )
}

export default Post
