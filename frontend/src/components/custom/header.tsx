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

interface AuthUserProps {
    username: string;
    email: string;
}

export function LoggedInUser({userData}: { userData: AuthUserProps}) {
    return (
        <div className="flex gap-5">
            <Link href="/dashboard/account" className="font-bold text-m px-3 hover:text-blue-600">{userData.username}</Link>
            <LogoutButton />
        </div>
    );
}


export default async function Header({ data }:  { data : HeaderPops }) {
    const user = await getUserMeLoader();
    const header = data;


    return (
        <header className="py-[20px] bg-slate-50 shadow-lg w-full relative z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link className="text-xl font-bold text-black" href={header.logoText.linkUrl}>{header.logoText.linkText}</Link>
                    <nav className="flex gap-5 justify-center items-center">
                        <ul className="font-sans text-sm mr-[20px]">
                            <Link href="/dashboard">Dashboard</Link>
                        </ul>
                        {user.ok ? (
                            <div className="flex gap-5 justify-center items-center px-5 py-3 border border-gray-200 rounded-lg">
                                <LoggedInUser userData={user.data} />
                            </div>
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