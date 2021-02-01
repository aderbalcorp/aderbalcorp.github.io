import Link from 'next/link'
import Layout from '../../components/Layout'
import BlogList from '../../components/blog-list'

import { getAllPosts } from '../../lib/api'
import Post from '../../types/post'

type Props = {
    posts: Post[]
}

export default function Blog({posts}: Props) {
  return (
      <Layout
          siteTitle="Blog"
          siteDescription="Aderbal"
      >

  <div className="section-xl">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <h1>Blog</h1>
          <BlogList posts={posts}/> 
        </div>
      </div>
    </div>
  </div>

        </Layout>
  )
}

export async function getStaticProps({params}) {
    const posts = getAllPosts(['slug', 'title', 'date'])

    return {
        props: {
            posts: posts
        }
    }
}
