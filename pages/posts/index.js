import React from 'react'
import { GraphQLClient } from 'graphql-request'

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

    </div>
  )
}

export default Posts
