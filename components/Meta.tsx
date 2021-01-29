import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.siteTitle}</title>
            <meta name="Description" content={props.siteDescription}></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link rel="icon" href="favicon.svg" />
        </Head>
    )
}
