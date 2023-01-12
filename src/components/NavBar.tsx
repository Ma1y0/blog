import {type NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import nouserpicture from "../../public/no-user-picture.png"

const NavBar: NextPage = () => {
    const { data: sessionData } = useSession()

    return (
        <div className="w-full mb-5 p-3">
            <div className="flex justify-center items-center w-full">
                <nav className="flex w-full flex-wrap justify-between items-center">
                    <Link href="/"><h1 className="font-semibold text-7xl">BLOG</h1></Link>
                    <div className="flex">
                        {sessionData ? <Image className="mr-5 rounded-full" src={sessionData.user?.image || nouserpicture} alt="User Picture" width={50} height={50} /> : null}
                        <button className="p-0 text-xl" onClick={sessionData ? () => signOut() : () => signIn()}>{sessionData ? "Sign Out" : "Sign In"}</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar