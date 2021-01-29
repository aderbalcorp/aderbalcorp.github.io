export default function Footer() {
    return(
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
    )
}
