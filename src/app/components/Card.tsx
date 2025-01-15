export default function Card({title, subtitle, paragraph}: {title:string, subtitle:string | undefined, paragraph: string | undefined | any }) {
    return (
    <div className="rounded overflow-hidden shadow-lg h-full border-solid border-2">
        <div className="px-6 py-4">
            <div className="font-bold mb-2 text-center text-lg">
                {title}
            </div>
            <div className="text-muted mb-2 text-center">
                {subtitle}
            </div>
            <div className="text-base">
                {paragraph}
            </div>
        </div>
    </div>
    )
}