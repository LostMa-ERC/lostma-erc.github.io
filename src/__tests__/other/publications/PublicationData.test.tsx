import { expect, describe, test, assert } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import data from '@/data/news.json';
import '@testing-library/jest-dom/vitest';
import { fetchChronologicalData } from '@/app/functions/fetchData';
import { NewsCategory } from '@/app/types/NewsCategory';
import { NewsType } from '@/app/types/NewsType';
import PublicationNotice from '@/app/(other)/publications/components/PublicationNotice';

// Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
const array:unknown = await fetchChronologicalData({arrays: data, category: NewsCategory.Publication})

// Cast the sorted array's items to the event data type
let news = array as Array<NewsType>;

describe.each(news)
    ('Validate Publications in news.json array, index %#', (item) => {

    test('Author or authors are in an array.', () => {
        assert(Array.isArray(item.detail));
    })

    test('Publication has a valid date.', () => {
      const date = new Date(item.start);
      assert(date);
    })

    test('Successfully parse publication component', () => {
      render(<PublicationNotice data={item} />);
      const article = within(screen.getByRole('article'))
      expect(
        article.getByRole('heading', {level: 2, name: item.title})
      )
      expect(article.getByText(item.description)).toBeInTheDocument()
      // If the publication has a link, it should be in the article's
      // (1) header and (2) footer
      if (item.link) {
        const links = article.getAllByRole('link')
        assert(links.length === 2)
      }
    })
  
  })