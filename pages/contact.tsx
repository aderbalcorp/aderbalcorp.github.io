import Link from 'next/link'
import Layout from '../components/Layout'

export default function Contact() {
    return (
<Layout
          siteTitle="Contact"
          siteDescription="Aderbal - Contact Page"
      >
        <h1>Contact</h1>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/policy">Privacy Policy</Link>
      </Layout>
    )
}
