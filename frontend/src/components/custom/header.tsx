import { Button } from "../ui/button";
import Link from "next/link";
import { StrapiImage } from "./strapi-image";
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
    userPic: {
        url: string;
        formats: {
            thumbnail: {
                url: string
            }
        };
    };
}

export function LoggedInUser({userData}: { userData: AuthUserProps}) {
    const userThumbnail = userData.userPic.formats.thumbnail.url;
    return (
        <div className="flex gap-5 justify-center items-center">
            <Link href="/dashboard/account" className="flex justify-center items-center gap-5 font-bold text-m mr-5 hover:text-blue-600">
                <StrapiImage src={userThumbnail} alt={userData.username} height={50} width={50} className="rounded-full w-10 h-10 object-cover" />
                <span>{userData.username}</span>
            </Link>
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
                            <Link href="/">Home</Link>
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