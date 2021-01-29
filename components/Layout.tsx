import Meta from "./Meta"

export default function Layout(props) {
    return(
        <div>
            <Meta
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />
            <body>
                {props.children}
            </body>
        </div>
    )
}
