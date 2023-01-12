import { type NextPage } from "next";
import Link from "next/link";

// type Post = {
//     id: string;
//     authorId: string;
//     authorName: string;
//     title: string;
//     description?: string;
//     content: string;
//     createdAt: any;
//     updatedAt: any;
// }

const Post: React.FC<{ post: any}> = ({ post }) => {
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