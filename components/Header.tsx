import Link from 'next/link'

export default function Header() {
return(
    <div className="header absolute-light">
        <div className="container">
            <div className="logo">
                <h4 className="uppercase letter-spacing-2"><Link href="/">aderbal</Link></h4>
            </div>
            <div className="header-menu-wrapper">
                <ul className="header-menu">
                    <li className="m-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="m-item">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="m-item">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="m-item">
                        <Link href="/about">About</Link>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
)
}
