import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { StrapiImage } from '@/components/custom/strapi-image';
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

interface Image {
    url: string;
    id: number;
    alternativeText: string;
}

interface Link {
    linkText: string;
    linkUrl: string;
    id: number;
}

interface HeroSectionProps {
   id: number;
   __component: string;
   heroTitle: string;
   heroDesc: string;
   heroImage: Image;
   Link: Link;
}


export default async function HeroSection( { data }: { readonly data: HeroSectionProps } ) {
    const image = data.heroImage;
    const link = data.Link;
    const user = await getUserMeLoader();

    return (
        <div className="w-full flex justify-center align-center py-[200px] relative">
            <div className="bg-image absolute inset-0 z-0">
                <StrapiImage priority={true} className="w-full h-full object-cover" src={image.url} alt={image.alternativeText} width={1920} height={1080} />
            </div>
            <div className="container text-center relative z-10 flex justify-center items-center flex-col">
                <h1 className="text-6xl font-black text-white">{data.heroTitle}</h1>
                <p className="text-3xl my-5 text-white">{data.heroDesc}</p>
                {user.ok ? (
                    <Button asChild size={"lg"} variant={'outline'}>
                        <Link href="/dashboard">Dashboard</Link>
                    </Button>
                ) : (
                    <Button asChild size={"lg"} variant={'outline'}>
                        <Link href={link.linkUrl}>{link.linkText}</Link>
                    </Button>
                )}
            </div>
        </div>
    );
}