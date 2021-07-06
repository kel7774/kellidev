import Image from 'next/image'

export default function InstagramFeed ({ instagramPosts }) {
  return (
    <div>
      <ul>
        {instagramPosts.map(({ node }, i) => {
          return (
            <li key={i}>
              <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label='view on instagram'
              >
                <Image
                  src={node.thumbnail_src}
                  alt={
                    node.edge_media_to_caption.edges[0].node.text
                      .replace(/(#\w+)+/g, '')
                      .trim()
                  }
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}