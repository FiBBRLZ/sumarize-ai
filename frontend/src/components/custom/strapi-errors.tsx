export default function StrapiErrors({ error }: { error: any }) {
    if(!error) return null;
    return <div className="text-red-500 text-sm text-center">{error}</div>
}
