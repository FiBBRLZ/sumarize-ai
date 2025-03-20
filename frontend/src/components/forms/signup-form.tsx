"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { registerUserAction } from "@/data/actions/auth-actions";
import ZodErrors from "@/components/custom/zod-errors";
import StrapiErrors from "@/components/custom/strapi-errors";


import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "../custom/submit-button";

const initialState = {
    username: '',
    email: '',
    data: null,
    zodErrors: null,
    message: null
}

export function SignupForm() {
    const [formState, formAction] = useActionState(registerUserAction, initialState)
    const [userName, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <div className="w-full max-w-md">
        <form action={formAction}>
            <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
                <CardDescription>
                Enter your details to create a new account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                {formState?.message && (
                    <p className="px-6 pb-3 text-center text-red-500">{formState.message}</p>
                )}
                <StrapiErrors error={formState?.strapiErrors?.message} />
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    autoComplete="new-password"
                />
                <ZodErrors error={formState?.zodErrors?.username} />
                </div>
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                />
                </div>
                <ZodErrors error={formState?.zodErrors?.email} />
                <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <ZodErrors error={formState?.zodErrors?.password} />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Button asChild variant={'default'} className="w-full">
                    <SubmitButton text='Sign Up' loadingText="Načítam.." />
                </Button>
            </CardFooter>
            </Card>
            <div className="mt-4 text-center text-sm">
            Have an account?
            <Link className="underline ml-2" href="signin">
                Sing In
            </Link>
            </div>
        </form>
        </div>
    );
}