import Link from 'next/link'

export default function Footer() {
    return(
  <div className="section border-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center text-md-left">
          <ul className="list-inline-dash margin-bottom-10">
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/policy">Privacy Policy</Link></li>
          </ul>
          <p>© 2021 ADERBAL. All Rights Reserved.</p>
        </div>
        <div className="col-12 col-md-6 text-center text-md-right">
          <ul className="list-inline-sm">
            <li><a className="button-circle button-circle-sm button-circle-white icon-xl" href="#"><i className="fab fa-github" /></a></li>
            <li><a className="button-circle button-circle-sm button-circle-white icon-xl" href="#"><i className="fab fa-hacker-news" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    )
}
