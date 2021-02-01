import Link from 'next/link'
import Post from '../types/post'

import DateFormatter from '../components/date-formatter'

type Props = {
    posts: Post[]
}

export default function BlogList({ posts }: Props) {
return(
<div className="section">
              <div className="container">
                  <div className="row">
                      <div className="col-16">

                  {posts.map((post) => (
                          <div className="margin-top-30">
                              <p className="font-small font-family-secondary uppercase margin-bottom-10"><DateFormatter dateString={post.date} /></p>
                              <h4 className="font-weight-medium"><Link href={"/blog/" + post.slug}>{post.title}</Link></h4>
                          </div>
                  ))}
                      </div>
                  </div>
              </div>
          </div>
)
}
