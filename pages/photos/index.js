// import { NextSeo } from 'next-seo'
// import Image from 'next/image'
// import Instagram from 'instagram-web-api'
// import classes from '../../styles/Photos.module.css'

export default function Photos () {
  return (
    <div>potental page w/ graphcms</div>
  )
}

// export default function Home ({ posts }) {
//   return (
//     <div>
//       <NextSeo
//         title='Kelli Landry - Extras / Photos'
//         description='Kelli Landry&apos;s Instagram Feed'
//         canonical='http://kellilandry.dev/photos'
//       />
//       <h1>photos</h1>
//       <section>one of my favorite hobbies is photography. growing up, i never really had a huge interest in being behind the lense, but then instagram came onto the scene. before instagram, i was taking pictures at punk concerts on my digital camera &amp; that was about it. as i started experimenting more with filters, i found that i enjoyed manipulating photos with different effects. if you scroll through my feed, i&apos;m sure you can see that my taste has evolved. (hopefully for the better). my preference for editing goes between <a href='https://vsco.co/' target='_blank' rel='noreferrer'>VSCO</a> and <a href='https://www.mextures.com/' target='_blank' rel='noreferrer'>mextures</a> or a combination of both. the white edges on either side of the photographs are just aesthetic borders for myself, and i don&apos;t really have a deep reason other than on the feed, it is consistent. i use <a href='https://apps.apple.com/us/app/whitagram/id523481129' target='_blank' rel='noreferrer'>whitagram</a> to add borders. my goal is to one day buy a professional camera to further my hobby.enjoy the feed, <a href='https://instagram.com/kellifrompierrepart' target='_blank' rel='noreferrer'>follow me</a> on instagram if you like, and hopefully this section will grow as my skills grow.</section>
//       <ul className={classes.ul}>
//         {posts.map(({ node }, i) => {
//           return (
//             <li key={i} className={classes.li}>
//               <Image src={node.thumbnail_src} height={200} width={200} alt='image' className={classes.img} />
//               <section className={classes.section}>{node.edge_media_to_caption.edges[0].node.text.replace(/(#\w+)+/g, '').trim()}</section>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export async function getStaticProps (context) {
//   const client = new Instagram({ username: process.env.NEXT_PUBLIC_IG_USERNAME, password: process.env.NEXT_PUBLIC_IG_PASSWORD })
//   await client.login()
//   const response = await client.getPhotosByUsername({
//     username: process.env.NEXT_PUBLIC_IG_USERNAME
//   })

//   return {
//     props: {
//       posts: response.user.edge_owner_to_timeline_media.edges
//     }
//   }
// }
