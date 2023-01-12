import { type NextPage } from "next";
import Link from "next/link";

const Post: NextPage = ({ post }) => {
    return (
        <div className="border p-3">
            <Link href={`/posts/${post.id}`} className="Linksgjegoe">
                <h1 className="font-semibold text-5xl">{post.title}</h1>
                <small className="">By {post.authorName}</small>
            </Link>
        </div>
    )
}

export default Post