import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import { motion } from 'framer-motion'
type Props = {
  posts: Post[]
}

const MoreStories = ({ posts, parallax }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (

<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1 }}
style={{x: parallax}}
>
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          /></motion.div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
