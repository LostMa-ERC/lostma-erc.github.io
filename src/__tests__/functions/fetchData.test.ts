import '@testing-library/jest-dom/vitest';
import news from '@/data/news.json';
import { expect, describe, test, assert } from 'vitest';
import { fetchChronologicalData, JsonArrayChrono } from '@/app/functions/fetchData';
import { NewsCategory } from '@/app/types/NewsCategory';

interface DateEndpoints {
    beginning: Date
    end: Date
}

function getEndpoints({data,}: {data: JsonArrayChrono}): DateEndpoints {
    const index0 = data[0].start
    const index1 = data[data.length -1].start
    const beginningDate = new Date(index1)
    const endDate = new Date(index0)
    const endpoints: DateEndpoints = {beginning: beginningDate, end:endDate}
    return endpoints
}

const orderedAll = await fetchChronologicalData(
    {arrays: [news], category:null}
)
const orderedEvents = await fetchChronologicalData(
    {arrays: news, category:NewsCategory.Event}
);
const orderedPublicationNews = await fetchChronologicalData(
    {arrays: news, category: NewsCategory.Publication}
);
const orderedOtherNews = await fetchChronologicalData(
    {arrays: news, category: NewsCategory.Other}
);

describe('Filtered News Data', () => {
    test('Events', () => {
        for (let i of orderedEvents) {
            assert.equal(i.category, NewsCategory.Event)
        }
    })
    test('Publications', () => {
        for (let i of orderedPublicationNews) {
            assert.equal(i.category, NewsCategory.Publication)
        }
    })
    test('Other', () => {
        for (let i of orderedOtherNews) {
            assert.equal(i.category, NewsCategory.Other)
        }
    })
})

describe('Fetch chronological data', () => {
    test('Test order of events', () => {
        const endpoints = getEndpoints({data: orderedEvents})
        expect.soft(endpoints.beginning).lessThanOrEqual(endpoints.end)
    })
    test('Test order of publications', () => {
        const endpoints = getEndpoints({data: orderedPublicationNews})
        expect.soft(endpoints.beginning).lessThanOrEqual(endpoints.end)
    })
    test('Test order of all news', () => {
        const endpoints = getEndpoints({data: orderedAll})
        expect.soft(endpoints.beginning).lessThanOrEqual(endpoints.end)
    })
})