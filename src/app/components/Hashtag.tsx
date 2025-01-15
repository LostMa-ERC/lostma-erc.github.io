import Link from 'next/link';

export default function Hahstag({url, }: {url:string | undefined | null}) {
    if (url) {
        return (
            <span className="
                inline-block dark:bg-gray-800 bg-gray-200 
                rounded-full px-3 py-1 
                text-sm font-semibold mr-2 mb-2
            ">
                <Link target="_blank" rel="noreferrer noopener" href={url}>
                    {url}
                </Link>
            </span>
        )
    }
    else {
        return <></>
    }
}
