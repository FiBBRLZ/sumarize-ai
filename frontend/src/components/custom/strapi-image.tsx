import Image from 'next/image';
import { getStrapiMedia } from '@/lib/utils';

interface StrapiImageProps {
    src: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
    priority?: boolean;
}

export function StrapiImage({src, alt, height, width, className, priority = false}: Readonly<StrapiImageProps>) {
    const imageUrl = getStrapiMedia(src);
    if (!imageUrl) return null;
    const imageFallback = `https://placehold.co/${width}x${height}`;


    return (
        <Image 
        alt={alt}
        src={imageUrl ?? imageFallback}
        width={width}
        height={height}
        className={className}
        priority={priority}
        />
    )
}