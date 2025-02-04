import { assert, expect, describe, test } from 'vitest';
import events from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { fetchChronologicalData } from '@/app/functions/fetchData';
import { NewsCategory } from '@/app/types/NewsCategory';

const array = await fetchChronologicalData({arrays: events, category: NewsCategory.Event})

describe.each(array)
    ('Validate events.json array, index %#', (item) => {

    test('Date is valid string (<50 char).', () => {
        expect.soft(item.subtitle).toBeTypeOf('string')
        expect.soft(item.subtitle.length).lessThanOrEqual(50)
    })

    test('Event has location.', () => {
      expect.soft(item.location).toBeTypeOf('object')
    })

    if (item.location) {
      test('Venue is valid string (<250 char).', () => {
          expect.soft(item.location.venue).toBeTypeOf('string')
          expect.soft(item.location.venue.length).lessThanOrEqual(250)
      })
      test('City is valid string (<250 char).', () => {
        expect.soft(item.location.city).toBeTypeOf('string')
        expect.soft(item.location.city.length).lessThanOrEqual(250)
     })
    }
  
  })