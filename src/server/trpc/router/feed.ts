import { router, publicProcedure } from "../trpc"
import { z } from "zod"

export const feedRouter = router({
    getHello: publicProcedure
        .input(z.object({ word: z.string().nullish() }).nullish())
        .query(({ input }) => {
            return {
                text: `Hello ${input?.word}`
            }
        }),
    getAllPosts: publicProcedure
        .query(({ ctx }) => {
            const posts = ctx.prisma.post.findMany()
            return posts
        })
})