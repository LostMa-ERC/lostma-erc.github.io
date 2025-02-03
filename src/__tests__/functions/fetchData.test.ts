import '@testing-library/jest-dom/vitest';
import { expect, describe, test } from 'vitest';
import { fetchChronologicalData, JsonArrayChrono } from '@/app/functions/fetchData';
import events from '@/data/events.json';
import publications from '@/data/publications.json';

const sortedEvents = await fetchChronologicalData({arrays: events});
const sortedPubs = await fetchChronologicalData({arrays: publications});
const sortedNews = await fetchChronologicalData({arrays: [events, publications]})

interface DateEndpoints {
    beginning: Date
    end: Date
}

function getEndpoints({data,}: {data: JsonArrayChrono}): DateEndpoints {
    const first = data[0].start
    const last = data[data.length -1].start
    const beginningDate = new Date(first)
    const endDate = new Date(last)
    const endpoints: DateEndpoints = {beginning: beginningDate, end:endDate}
    return endpoints
}

describe('Fetch chronological data', () => {
    test('Test order of events', () => {
        const endpoints = getEndpoints({data: sortedEvents})
        expect.soft(endpoints.beginning).greaterThanOrEqual(endpoints.end)
    })
    test('Test order of publications', () => {
        const endpoints = getEndpoints({data: sortedPubs})
        expect.soft(endpoints.beginning).greaterThanOrEqual(endpoints.end)
    })
    test('Test order of news', () => {
        const endpoints = getEndpoints({data: sortedNews})
        expect.soft(endpoints.beginning).greaterThanOrEqual(endpoints.end)
    })
})