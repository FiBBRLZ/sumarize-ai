import { Button } from "../ui/button";
import Link from "next/link";

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


export default function Header({ data }:  { data : HeaderPops }) {
    const header = data;
    return (
        <header className="py-[20px] bg-slate-50 shadow-lg fixed top-0 w-full z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link className="text-xl font-bold text-black" href={header.logoText.linkUrl}>{header.logoText.linkText}</Link>
                    <Button asChild size={"lg"} variant={'default'}>
                        <Link href={header.ctaButton.linkUrl}>{header.ctaButton.linkText}</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}