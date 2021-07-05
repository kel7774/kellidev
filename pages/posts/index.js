import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckqegbt2ezupe01xtcbr80b9g/master')

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
          <div key={post.id}>
            <Link key={post.id} as={`/posts/${post.slug}`} href='/posts/[slug]'>
              <a><div>{post.title}</div></a>
            </Link>
            <div>{post.excerpt}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
