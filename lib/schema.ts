import { z } from "zod";


export const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(5)

})