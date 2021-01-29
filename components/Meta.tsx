import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.siteTitle}</title>
            <meta name="Description" content={props.siteDescription}></meta>
            <link rel="icon" href="favicon.svg" />
        </Head>
    )
}
