import {type NextPage } from "next"
import Head from "next/head"
import { trpc } from "../utils/trpc"
import Post from "../components/Post"

// export const getStaticProps: GetStaticProps = async () => {
  

//   return {
//     props : { posts },
//     revalidate: 50
//   }
// }

const Home: NextPage = () => {
  // const { data, isLoading, isFetching, error, isError } = 
  const posts = trpc.feed.getAllPosts.useQuery()

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col gap-3 flex-wrap m-3">
        {posts.data?.map((post) => (
            <div className="" key={post.id ?? ""}>
              <Post post={post} />
            </div>
        ))}
      </main>
    </>
  );
};

export default Home