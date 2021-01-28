import Link from 'next/link'

export default function About() {
    return (
        <div>
        <h1>About</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/policy">Privacy Policy</Link>      </div>
    )
}
