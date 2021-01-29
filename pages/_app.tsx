import type { AppProps } from 'next/app'

import "../node_modules/bootstrap/scss/bootstrap.scss"
import '../styles/common.scss'
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
