import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
    return(
        <div>
            <Meta
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />

            <div className="wrapper bg-dark">
                <Header />
                {props.children}
                <Footer />
            </div>
        </div>
    )
}
