import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts, getPostSlugs } from '../../lib/api'
import Post from '../../types/post'

type Props = {
    allPosts: Post[]
}

export default function Blog({ posts }: Props) {
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
          <div className="section">
              <div className="container">
                  <div className="row">
                      <div className="col-16">

                  {posts.map((post) => (
                          <div className="margin-top-30">
                              <p className="font-small font-family-secondary uppercase margin-bottom-10">Feb 6, 2020</p>
                              <h4 className="font-weight-medium"><Link href={"/blog/" + post.slug}>{post.title}</Link></h4>
                          </div>
                  ))}
                      </div>
                  </div>
              </div>
          </div>
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
