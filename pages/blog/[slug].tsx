import { useRouter } from 'next/router'
import ErrorPage from '../_error'

import markdownToHtml from '../../lib/markdownToHtml'
import { getAllPosts, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

return(
    <div>
        {post.content} 
    </div>
)
}

export async function getStaticProps({ params }) {
    const post: any = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])

    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }

}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
