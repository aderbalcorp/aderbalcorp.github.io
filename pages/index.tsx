import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
      <Layout
          siteTitle="Home"
          siteDescription="Aderbal"
      >
          <div className="wrapper">
              <div className="header">
                  Hello!
              </div>

            Hi

              <div className="section-xs">
                  Footer
              </div>
          </div>
      </Layout>
  )
}
