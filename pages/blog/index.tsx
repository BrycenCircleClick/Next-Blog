import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../interfaces/post'
import { motion, useScroll, MotionValue, useTransform, useMotionValueEvent} from 'framer-motion'
import { useRef } from 'react'


type Props = {
  allPosts: Post[]
}






export default function Index({ allPosts }: Props) {


    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-500, 500]);
    const reverseParallax = useTransform(parallax, (v) => -v);
    const lax = useTransform(scrollYProgress, [.5, 1], [1, 3]);
    const laxPosts = useTransform(scrollYProgress, [.5, 1], [100, 0]);

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

console.log(parallax)
console.log(reverseParallax)
  return (
    <>
      <Layout>
 

        <Container>   
          <Intro />
 <div  ref={target} className="z-0">         {heroPost && (
         

            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              reverseParallax={reverseParallax}
              lax={lax}
            />
          )}
                </div>
          {morePosts.length > 0 &&
          
          
          <MoreStories posts={morePosts} parallax={laxPosts}/>

          
          
          }
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
