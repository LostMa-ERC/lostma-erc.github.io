export default function GetItemLink(link: string | null | undefined) {
    if (link) {
        return <span className="
            inline-block dark:bg-gray-800 bg-gray-200 
            rounded-full px-3 py-1 
            text-sm font-semibold mr-2 mb-2
            ">
                <a target="_blank" rel="noreferrer noopener" href={link}>{link}</a>
            </span>
    }

    else {
        return <></> ;
    }
}