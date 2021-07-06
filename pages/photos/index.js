import InstagramFeed from '../../components/InstagramFeed'
import Instagram from 'instagram-web-api'

export default function Photos ({ instagramPosts }) {
  return (
    <InstagramFeed instagramPosts={instagramPosts} />
  )
}

export async function getStaticProps (context) {
  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD
  })
  let posts = []
  try {
    await client.login()
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME
    })
    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
  } catch (err) {
    console.log('Something went wrong while logging into Instagram', err)
  }
  return {
    props: {
      instagramPosts: posts
    }
  }
}
