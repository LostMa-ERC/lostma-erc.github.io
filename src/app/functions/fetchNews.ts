import { fetchChronologicalData } from "./fetchData";
import { NewsType } from "../types/NewsType";
import { NewsCategory } from "../types/NewsCategory";

export async function fetchAllNews({arrays}: {arrays: any[]}): Promise<NewsType[]> {
    // Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
    const array:unknown = await fetchChronologicalData({arrays: arrays, category: null})
    // Cast the sorted array's items to the event data type
    let news = array as Array<NewsType>;
    return news
};

export async function fetchEvents({arrays}: {arrays: any[]}): Promise<NewsType[]> {
    const array: unknown = await fetchChronologicalData({arrays: arrays, category: NewsCategory.Event})
    let events = array as Array<NewsType>;
    return events
}

export async function fetchPublications({arrays}: {arrays: any[]}): Promise<NewsType[]> {
    const array: unknown = await fetchChronologicalData({arrays: arrays, category: NewsCategory.Publication})
    let publications = array as Array<NewsType>;
    return publications
}