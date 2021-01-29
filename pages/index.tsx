import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
      <Layout
          siteTitle="Home"
          siteDescription="Aderbal"
      >

<div className="wrapper bg-dark">
  {/* Header */}
  <div className="header absolute-light">
    <div className="container">
      <div className="logo">
        <h4 className="uppercase letter-spacing-2"><a href="#">Arty</a></h4>
        {/*
						<img class="logo-dark" src="../assets/images/your-logo-dark.jpg" alt="">
						<img class="logo-light" src="../assets/images/your-logo-light.jpg" alt="">
						*/}
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
  {/* end Header */}
  {/* Hero section */}
  <div className="section-xl">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div className="margin-bottom-30">
            <p className="font-weight-medium font-family-secondary uppercase letter-spacing-2 text-white-04">We Believe That</p>
          </div>
          <h1>Simplicity will stand out, while complexity will get lost in the crowd</h1>
          <div className="margin-top-50">
            <a className="button button-xl button-fancy-1-outline-white button-font-2" href="#">Get In Touch</a>
          </div>
        </div>
      </div>{/* end row */}
    </div>{/* end container */}
  </div>
  {/* end Hero section */}
  {/* Portfolio section */}
  <div className="section-lg padding-top-0">
    <div className="container">
      <div className="portfolio-masonry portfolio-title-overlay hover-style-2 column-3 spacing-20">
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2-square.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2-square.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2-square.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="#">
            <div className="portfolio-img">
              <img src="../assets/images/col-2.jpg" alt="" />
            </div>
            <div className="portfolio-hover">
              <div className="portfolio-hover-box">
                <h4 className="font-weight-normal">Project Title</h4>
                <span className="font-small uppercase">Category</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>{/* end container */}
  </div>
  {/* end Portfolio section */}
  {/* Footer */}
  <div className="section border-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center text-md-left">
          <ul className="list-inline-dash margin-bottom-10">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <p>© 2020 FlaTheme, All Rights Reserved.</p>
        </div>
        <div className="col-12 col-md-6 text-center text-md-right">
          <ul className="list-inline-sm">
            <li><a className="button-circle button-circle-sm button-circle-white" href="#"><i className="fab fa-facebook-f" /></a></li>
            <li><a className="button-circle button-circle-sm button-circle-white" href="#"><i className="fab fa-twitter" /></a></li>
            <li><a className="button-circle button-circle-sm button-circle-white" href="#"><i className="fab fa-linkedin-in" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end Footer */}
</div>{/* end wrapper */}

      </Layout>
  )
}
