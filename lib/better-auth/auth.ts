import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

type AdapterDb = Parameters<typeof mongodbAdapter>[0];

const createAuth = (db: AdapterDb) =>
    betterAuth({
        database: mongodbAdapter(db),
        cookies: nextCookies(),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });

type AuthInstance = ReturnType<typeof createAuth>;

let authInstance: AuthInstance | undefined;

export const getAuth = async () => {
    if (authInstance) {
        return authInstance;
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) {
        throw new Error("Database connection is not established");
    }

    authInstance = createAuth(db as unknown as AdapterDb);

    return authInstance;
}