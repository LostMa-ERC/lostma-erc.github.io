interface NewsItemType {
    "classification": string,
    "date": string,
    "title": string,
    "authors": string[],
    "body": string,
    "link": string | undefined | null
};

export type { NewsItemType }