"use server"
import { z } from "zod";
import { cookies } from "next/headers";
import { registerUserService } from "@/data/services/auth-service";
import { redirect } from "next/navigation";
import path from "path";

const config = {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
    domain: process.env.HOST ?? 'localhost',
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
}


const schemaRegister = z.object({
    username: z.string({
            required_error: "Name is required"
        }).min(3).max(20, {
            message: "Username must be between 3 and 20 characters"
        }),
    password: z.string().min(6).max(100, {
        message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
});

export async function registerUserAction(prevState: any, formData: FormData) {
    const validatedFields = schemaRegister.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
    });
    
    if(!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to register, missing fields!'
        }
    }

    const response = await registerUserService(validatedFields.data);

    if (!response) {
        return {
          ...prevState,
          strapiErrors: null,
          zodErrors: null,
          message: "Ops! Something went wrong. Please try again.",
        };
    }

    if(response.error) {
        return {
            ...prevState,
            strapiErrors: response.error,
            zodErrors: null,
            message: "Failed to Register.",
          };
    }

    (await cookies()).set('jwt', response.jwt, config);
    redirect('/dashboard');
}