import Head from 'next/head'
import Image from 'next/image'
import Instagram from 'instagram-web-api'
import classes from '../../styles/Photos.module.css'

export default function Home ({ posts }) {
  return (
    <div>
      <Head>
        <title>Instagram Posts</title>
      </Head>

      <h1>Instagram Posts</h1>
      <ul className={classes.ul}>
        {posts.map(({ node }, i) => {
          return (
            <li key={i} className={classes.li}>
              <Image src={node.thumbnail_src} height={300} width={300} alt='image' />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps (context) {
  const client = new Instagram({ username: process.env.NEXT_PUBLIC_IG_USERNAME, password: process.env.NEXT_PUBLIC_IG_PASSWORD })
  await client.login()
  const response = await client.getPhotosByUsername({
    username: process.env.NEXT_PUBLIC_IG_USERNAME
  })

  return {
    props: {
      posts: response.user.edge_owner_to_timeline_media.edges
    }
  }
}
