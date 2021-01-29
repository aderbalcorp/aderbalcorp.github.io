import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
      <Layout
          siteTitle="Home"
          siteDescription="Aderbal"
      >

  {/* Hero section */}
  <div className="section-xl">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div className="margin-bottom-30">
            <p className="font-weight-medium font-family-secondary uppercase letter-spacing-2 text-white-04">We Believe That</p>
          </div>
          <h1>Home Page</h1>
          <div className="margin-top-50">
            <a className="button button-xl button-fancy-1-outline-white button-font-2" href="#">Get In Touch</a>
          </div>
        </div>
      </div>{/* end row */}
    </div>{/* end container */}
  </div>
  {/* end Hero section */}

        </Layout>
  )
}
