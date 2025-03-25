import isLoggedIn from "@/data/services/is-logged-in";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogoutButton } from "./logout-button";

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
    const header = data;
    return (
        <header className="py-[20px] bg-slate-50 shadow-lg w-full relative z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link className="text-xl font-bold text-black" href={header.logoText.linkUrl}>{header.logoText.linkText}</Link>
                    <nav className="flex gap-5 justify-center items-center">
                        <Link href="/dashboard">Dashboard</Link>
                        <Button asChild size={"lg"} variant={'default'}>
                            <Link href={header.ctaButton.linkUrl}>{header.ctaButton.linkText}</Link>
                        </Button>
                        {await isLoggedIn() ? <LogoutButton /> : null }
                    </nav>
                </div>
            </div>
        </header>
    );
}