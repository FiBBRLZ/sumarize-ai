import { Button } from "../ui/button";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

interface HeaderPops {
    id: number;
    logoText: {
        id: number;
        linkUrl: string;
        linkText: string;
        isExternal: boolean;
    }
    ctaButton: {
        id: number;
        linkUrl: string;
        linkText: string;
        isExternal: boolean;
    }
}


export default async function Header({ data }:  { data : HeaderPops }) {
    //assign user.ok key to user variable to check if user is logged in
    const { ok: user } = await getUserMeLoader();

    const header = data;
    return (
        <header className="py-[20px] bg-slate-50 shadow-lg w-full relative z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link className="text-xl font-bold text-black" href={header.logoText.linkUrl}>{header.logoText.linkText}</Link>
                    <nav className="flex gap-5 justify-center items-center">
                        <Link href="/dashboard">Dashboard</Link>
                        {user ? (
                            <LogoutButton />  
                        ): (
                            <Button asChild size={"lg"} variant={'default'}>
                                <Link href={header.ctaButton.linkUrl}>{header.ctaButton.linkText}</Link>
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}