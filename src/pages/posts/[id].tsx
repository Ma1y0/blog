import { type NextPage } from "next"
import { useRouter } from "next/router"
import { trpc } from "../../utils/trpc"
import ReactMarkdown from "react-markdown"

const Post: NextPage = (context) => {
    const router = useRouter()
    const { id } = router.query
    
    const post = trpc.feed.getPostById.useQuery({id: id})

    // const h = "Hello
    // =====
    // How are you?  
    // What are you doing?
    // # Hello World"

    return (
        <main className="min-h-screen p-6">
            <h1 className="text-5xl mb-5 p-2">{post.data?.title}</h1>
            {post.data ?
                <ReactMarkdown className="markdown-preview rounded-lg bg-post p-2" children={post.data?.content} />
            : null
            }
        </main>
    )
}

export default Post