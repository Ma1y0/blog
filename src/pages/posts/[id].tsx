import { type NextPage } from "next"
import { useRouter } from "next/router"

const Post: NextPage = (context) => {
    const router = useRouter()
    const { id } = router.query
    

    return (
        <main>
            {id}
        </main>
    )
}

export default Post