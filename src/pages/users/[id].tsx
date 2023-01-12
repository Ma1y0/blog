import { type NextPage } from "next"
import { useRouter } from "next/router"

const User: NextPage = (context) => {
    const router = useRouter()
    const { id } = router.query
    

    return (
        <main>
            {id}
        </main>
    )
}

export default User