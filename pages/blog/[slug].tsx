import { useRouter } from 'next/router'
import ErrorPage from '../_error'

import Layout from '../../components/Layout'
import DateFormatter from '../../components/date-formatter'

import markdownToHtml from '../../lib/markdownToHtml'
import { getAllPosts, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

return(
    <Layout
        siteTitle=""
        siteDescription=""
    >
        <div className="section">

            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div className="margin-top-20 margin-bottom-20">
                            <h1 className="font-weight-normal">{post.title}</h1>
                        </div>
                        <ul className="list-inline-dash">
                            <li><span>by {post.author.name}</span></li>
                            <li><a href={"/blog/" + post.slug}><DateFormatter dateString={post.date} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

        <div className="section bg-white">
            <div className="container">
                <div className="padding-y-30 padding-top-0">
                    <div className="container text-center">
                        <ul className="list-inline-sm">
                            <li><span className="button button-xs button-outline-gray">#Art</span></li>
                            <li><span className="button button-xs button-outline-gray">#Fashion</span></li>
                            <li><span className="button button-xs button-outline-gray">#Lifestyle</span></li>
                        </ul>
                    </div>
                </div>

                <div className="row post-content"
                    dangerouslySetInnerHTML={{ __html: post.content}}
                >
                </div>
            </div>
        </div>

    </Layout>
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
