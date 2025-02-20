import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="h-screen text-center flex items-center justify-center flex-col bg-slate-800 text-white">
            <div className="container">
                <h1 className='text-[120px]'>404</h1>
                <h2 className="text-5xl">Ooops, nothing to see here.</h2>
                <Button asChild size={"lg"} variant={'outline'} className='my-[20px] text-black'>
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        </div>
    );
}