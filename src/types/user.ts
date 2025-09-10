import {z} from "zod"

export const GeneralUserSchema = z.object({
  userId: z.string().default(""),
  avatar: z.string().default(""),
  nickname: z.string().default(""),
  bio: z.string().nullable().default(null)
})

export type GeneralUser = z.infer<typeof GeneralUserSchema>
