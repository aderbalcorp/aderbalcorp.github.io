import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

return(
    <div>
        Hello!
    </div>
)
}
