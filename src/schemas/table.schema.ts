import {z , TypeOf} from "zod"

const tableSchema = z.object({
      id:z.string().optional(),
      userId:z.string(),
      name:z.string({required_error:"name is required"})
})

export type Table = TypeOf<typeof tableSchema>