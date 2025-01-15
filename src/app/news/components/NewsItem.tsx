import { NewsItemType } from "./models";
import SetInnerHTML from "@/app/components/innerHTML";
import GetItemLink from "./GetItemLink";
import MakeIcon from "./MakeNewsIcon";

export default function NewsItem({item}: {item: NewsItemType}) {
    return (
        <>
        <div className="
            relative
            p-2 md:p-4 rounded
            h-full min-h-48
            ring-2 ring-primary ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900
            bg-gradient-to-l from-gray-100 dark:from-gray-800
        ">
            <div className="absolute top-0 left-0 -mx-2">
                {MakeIcon(item.classification)}
            </div>
            <div className="flex mb-4 ps-12 space-x-4">
                <span className="order-last grow-0">{item.date}</span>
                <h2 className="order-first grow">
                    {item.title}
                </h2>
            </div>
            <div className="text-muted">{item.authors.map((author, index) => 
                <span key={`author-${index}`} className="me-4">{author}</span>
            )}
            </div>
            <div className="
                min-h-24 max-h-48
                scroll-smooth focus:scroll-auto
                overflow-x-scroll
                p-2 my-4
            "
            >
                {SetInnerHTML(item.body)
            }</div>
            <div className="overflow-hidden">
                {GetItemLink(item.link)}
            </div>
        </div>
        </>
    )
}