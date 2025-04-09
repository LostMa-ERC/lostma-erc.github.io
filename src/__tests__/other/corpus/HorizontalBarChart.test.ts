import { vi, expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import Page from "@/app/(other)/corpus/page";

// Patch fix for Reference Error with ResizeObserver, necessary for Charts
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

describe('Charts', () => {
  it('Render page with generated barchart', () => {
    // Render the /corpus page
    const page = render(Page());

    // Confirm that a <ResponsiveContainer> was rendered in the <div>
    const chart = page.getByTestId('HorizontalBarChart')
    expect(chart.children.length).toBe(1)

  })
})
