import { expect, describe, test } from 'vitest';
import news from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { fetchEvents } from '@/app/functions/fetchNews';

const events = await fetchEvents({arrays:news})

describe.each(events)
    ('Validate Events in news.json array, index %#', (item) => {

    test('Detail is valid string (<100 char).', () => {
        expect.soft(item.detail).toBeTypeOf('string')
        expect.soft(item.detail.length).lessThanOrEqual(100)
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