export default function Header() {
return(
    <div className="header absolute-light">
        <div className="container">
            <div className="logo">
                <h4 className="uppercase letter-spacing-2"><a href="#">aderbal</a></h4>
            </div>
            <div className="header-menu-wrapper">
                <ul className="header-menu">
                    <li className="m-item">
                        <a className="m-link" href="/">Home</a>
                    </li>
                    <li className="m-item">
                        <a className="m-link" href="/blog">Blog</a>
                    </li>
                    <li className="m-item">
                        <a className="m-link" href="/contact">Contact</a>
                    </li>
                    <li className="m-item">
                        <a className="m-link" href="/contact">About</a>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
)
}
