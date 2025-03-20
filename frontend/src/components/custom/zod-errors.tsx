export default function ZodErrors({ error }: { error: any }) {
    if(!error) return null;
    return error.map((err: string, index: number) => {
        return <div key={index} className="text-red-500 text-sm text-center">{err}</div>
    });
}
