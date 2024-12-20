// CONFIGURATION of the .env.local file
import {z, ZodError} from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string(),
    LIVEBLOCKS_PUBLIC_API_KEY: z.string(),
})

export type Env = z.infer<typeof envSchema>

let env:Env;
try {
    env = envSchema.parse(process.env);
} catch (e) {
    const error = e as ZodError;
    console.error(error);
    process.exit(1);
}

export default env;