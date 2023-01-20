import {type NextPage } from "next"
import { useSession } from "next-auth/react"
import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import { trpc } from "../../utils/trpc"


const NewPost: React.FC = () => {
    const { data: sessionData } = useSession()

    const mutation = trpc.useMutation(["createPost"])

    const [markdown, setMarkdown] = useState("")
    const [title, setTitle] = useState("")

    const onChange = (e: Event) => {
        const target = e.target as HTMLTextAreaElement
        
        setMarkdown(target.value)
    }

    const onChangeTitle = (e: Event) => {
        const target = e.target as HTMLInputElement

        setTitle(target.value)
    }

    // TODO
    const onSubmit = (e: Event) => {
        e.preventDefault()

        mutation.mutate({
            title: title,
            content: markdown,
            user: sessionData?.user
        })


    }

    return (
        <main className="min-h-screen p-6">
            <form onSubmit={onSubmit} className="flex flex-col flex-wrap">
                <div>
                    <input className="rounded-lg p-2" value={title} onChange={onChangeTitle} type="text" placeholder="Title" />
                    <textarea className="w-full h-64 p-2 rounded-lg mt-3" value={markdown} onChange={onChange} placeholder="Content"></textarea>
                </div>
                <button className="p-2" onClick={onSubmit}>Publish</button>
            </form>
            <ReactMarkdown className="markdown-preview" children={markdown} />
        </main>
    )
}

export default NewPost