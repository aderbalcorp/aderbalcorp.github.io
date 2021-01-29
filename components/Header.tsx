export default function Header() {
return(
    <div className="header absolute-light">
        <div className="container">
            <div className="logo">
                <h4 className="uppercase letter-spacing-2"><a href="#">Arty</a></h4>
            </div>
            <div className="header-menu-wrapper">
                {/* Menu */}
                <ul className="header-menu">
                    <li className="m-item">
                        <a className="m-link" href="#">Basic</a>
                    </li>
                    <li className="m-item">
                        <a className="m-link" href="#">Dropdown</a>
                        <ul className="m-dropdown">
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                        </ul>
                    </li>
                    <li className="m-item">
                        <a className="m-link" href="#">Subdropdown</a>
                        <ul className="m-dropdown">
                            <li className="m-dropdown-item">
                                <a className="m-dropdown-link" href="#">Dropdown Item</a>
                                <ul className="m-subdropdown">
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                </ul>
                            </li>
                            <li className="m-dropdown-item">
                                <a className="m-dropdown-link" href="#">Dropdown Item</a>
                                <ul className="m-subdropdown">
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                    <li className="m-subdropdown-item"><a className="m-subdropdown-link" href="#">Subdropdown Item</a></li>
                                </ul>
                            </li>
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                            <li className="m-dropdown-item"><a className="m-dropdown-link" href="#">Dropdown Item</a></li>
                        </ul>
                    </li>
                </ul>
                {/* Close Button */}
                <button className="close-button">
                    <span />
                </button>
            </div>{/* end header-menu-wrapper */}
            {/* Menu Toggle on Mobile */}
            <button className="m-toggle">
                <span />
            </button>
        </div>{/* end container */}
    </div>
)
}
