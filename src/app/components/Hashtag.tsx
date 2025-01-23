import Link from 'next/link';

export default function Hahstag({url, }: {url:string | undefined | null}) {
    if (url) {
        return (
            <span className="
                inline-block bg-gray-200 
                text-sm font-semibold mr-2 mb-2
                link
            ">
                <Link className='mx-3 my-1' target="_blank" rel="noreferrer noopener" href={url}>
                    {url}
                </Link>
            </span>
        )
    }
    else {
        return <></>
    }
}
