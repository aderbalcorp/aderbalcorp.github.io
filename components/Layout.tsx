import Meta from "./Meta"
import Header from "./Header"

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
            </div>
        </div>
    )
}
