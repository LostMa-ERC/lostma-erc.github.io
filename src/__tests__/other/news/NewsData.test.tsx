import { assert, expect, describe, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import data from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { NewsCategory } from '@/app/types/NewsCategory';
import {fetchAllNews} from '@/app/functions/fetchNews';
import NewsComponent from '@/app/(other)/news/components/NewsNotice';

const news = await fetchAllNews({arrays: data})

describe.each(news)
    ('Validate news.json array, index %#', (item) => {

    test('Successfully parse news component', () => {
        render(<NewsComponent data={item} index={1} />);
        const article = within(screen.getByRole('article'))
        expect(
            article.getByRole('heading', {level: 2, name: item.title})
        )
    })
    
    test('Title is valid string (<250 char).', () => {
      expect.soft(item.title).toBeTypeOf('string')
      expect.soft(item.title.length).lessThanOrEqual(250)
    })

    if (Array.isArray(item.detail)) {
        test('Detail a list of authors.', () => {
            expect.soft(item.detail.length).greaterThanOrEqual(1)
        })
    }
    else {
        test('Detail is a valid string (<100 char).', () => {
            expect.soft(item.detail).toBeTypeOf('string')
            expect.soft(item.detail.length).lessThanOrEqual(100)
        })
    }

    test('Description does not include a URL. (Put URL in link)', () => {
        assert.notInclude(item.description, 'https://')
        assert.notInclude(item.description, 'http://')
    })

    if (item.category != NewsCategory.Publication) {
        test('Description is valid string (<750 char).', () => {
            expect.soft(item.description).toBeTypeOf('string')
            expect.soft(item.description.length).lessThanOrEqual(750)
        })
    }

    if(item.link !== null) {
        if (item.link.page) {
            test('Link is valid', () => {
                expect.soft(item.link?.url).toBeTypeOf('string')
                expect.soft(item.link?.url).toMatch(RegExp('^/news/'))
            })
        }
        else {
            test('Link is valid.', () => {
                expect.soft(item.link?.url).toBeTypeOf('string')
                const protocol = RegExp('^http://|^https://')
                expect.soft(item.link?.url).toMatch(protocol)
            })
        }
        test(('Link label is valid.'), () => {
            expect.soft(item.link?.label).toBeTypeOf('string')
            const labelWordArray = item.link?.label.split(/\s+/)
            if (labelWordArray) {
                expect.soft(labelWordArray.length).lessThanOrEqual(3)
                for (let word of labelWordArray) {
                    expect.soft(word[0]).toEqual(word[0].toUpperCase())
                }
            }
        })
    }
  
  })