import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test("App Router: Works with Server Components", () => {
    render(<Page />);
    // Confirm we've only set one top-level Header
    expect(
        screen.getByRole("heading", { level: 1, name: "What is LostMa?" }),
    ).toBeDefined();
    // Confirm that the icon links in the body are directing to the expecte pages
    expect(
        screen.getByTestId("news-page-icon-link").getAttribute("href")
    ).toBe("/news");
    expect(
        screen.getByTestId("people-page-icon-link").getAttribute("href")
    ).toBe("/people");
    expect(
        screen.getByTestId("corpus-page-icon-link").getAttribute("href")
    ).toBe("/corpus");
    // Confirm that all the links have an href
    expect(screen.getAllByRole('link')).toBeDefined()
  });
