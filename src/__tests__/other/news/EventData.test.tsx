import { expect, describe, test } from 'vitest';
import events from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { fetchChronologicalData } from '@/app/functions/fetchData';
import { NewsType } from '@/app/types/NewsType';
import { NewsCategory } from '@/app/types/NewsCategory';

// Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
const array:unknown = await fetchChronologicalData({arrays: events, category: NewsCategory.Event})

// Cast the sorted array's items to the event data type
let news = array as Array<NewsType>;

describe.each(news)
    ('Validate Events in news.json array, index %#', (item) => {

    test('Date is valid string (<50 char).', () => {
        expect.soft(item.detail).toBeTypeOf('string')
        expect.soft(item.detail.length).lessThanOrEqual(50)
    })

    test('Event has location.', () => {
      expect.soft(item.location).toBeTypeOf('object')
    })

    if (item.location) {
      test('Venue is valid string (<250 char).', () => {
          expect.soft(item.location?.venue).toBeTypeOf('string')
          expect.soft(item.location?.venue.length).lessThanOrEqual(250)
      })
      test('City is valid string (<250 char).', () => {
        expect.soft(item.location?.city).toBeTypeOf('string')
        expect.soft(item.location?.city.length).lessThanOrEqual(250)
     })
    }
  
  })