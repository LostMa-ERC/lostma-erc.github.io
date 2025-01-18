import Link from "next/link";
import { VocabTerms } from "./models";

export function VocabURL({data}: {data:VocabTerms}) {
    if (data.url) {
        return <Link target="_blank" rel="noreferrer noopener" href={data.url}>{data.label}</Link>;
    }
    else {
        return <>{data.label}</>;
    }
}
