import { assert, expect, describe, test } from 'vitest';
import events from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { fetchChronologicalData } from '@/app/functions/fetchData';
import { NewsCategory } from '@/app/types/NewsCategory';

const array = await fetchChronologicalData({arrays: events, category: null})

describe.each(array)
    ('Validate news.json array, index %#', (item) => {
    
    test('Title is valid string (<250 char).', () => {
      expect.soft(item.title).toBeTypeOf('string')
      expect.soft(item.title.length).lessThanOrEqual(250)
    })

    if (Array.isArray(item.subtitle)) {
        test('Subtitle is list of authors.', () => {
            expect.soft(item.subtitle.length).greaterThanOrEqual(1)
        })
    }
    else {
        test('Subtitle is valid string (<50 char).', () => {
            expect.soft(item.subtitle).toBeTypeOf('string')
            expect.soft(item.subtitle.length).lessThanOrEqual(50)
        })
    }

    test('Description has no URL.', () => {
        assert.notInclude(item.description, 'https://')
        assert.notInclude(item.description, 'http://')
    })

    if (item.category != NewsCategory.Publication) {
        test('Description is valid string (<750 char).', () => {
            expect.soft(item.description).toBeTypeOf('string')
            expect.soft(item.description.length).lessThanOrEqual(750)
        })
    }

    if(item.link) {
        if (item.link.page) {
            test('Link is valid', () => {
                expect.soft(item.link.url).toBeTypeOf('string')
                expect.soft(item.link.url).toMatch(RegExp('^/events/'))
            })
        }
        else {
            test('Link is valid.', () => {
                expect.soft(item.link.url).toBeTypeOf('string')
                const protocol = RegExp('^http://|^https://')
                expect.soft(item.link.url).toMatch(protocol)
            })
        }
        test(('Link label is valid.'), () => {
            expect.soft(item.link.label).toBeTypeOf('string')
            const labelWordArray = item.link.label.split(/\s+/)
            expect.soft(labelWordArray.length).lessThanOrEqual(3)
            for (let word of labelWordArray) {
                expect.soft(word[0]).toEqual(word[0].toUpperCase())
            }
        })
    }
  
  })