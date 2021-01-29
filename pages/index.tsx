import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
      <Layout
          siteTitle="Home"
          siteDescription="Aderbal"
      >
        <h1>Home</h1>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/policy">Privacy Policy</Link>
      </Layout>
  )
}
