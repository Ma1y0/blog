import { router, publicProcedure, protectedProcedure } from "../trpc"
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
        }),
    getPostById: publicProcedure
        .input(z.object({id: z.string()}))
        .query(({ctx, input}) => {
            const post = ctx.prisma.post.findFirst({
                where: {
                    id: input.id
                }
            })

            return post
        }),
    createPost: publicProcedure
        .input(z.object({ title: z.string(), content: z.string(), user: z.any }))
        .mutation((req, ctx) => {
            const post = ctx.prisma.post.create({
                data: {
                    title: req.title,
                    content: req.content,
                    author: {
                        connect: {
                            id: req.user.id
                        }
                    }
                }
            })
            return post
        })
})