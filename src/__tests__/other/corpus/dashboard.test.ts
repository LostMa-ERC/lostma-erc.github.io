import CorpusPage from '@/app/(other)/corpus/page';
import { expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { it } from 'vitest';

describe('D3 Barcharts', () => {
    it('Renders D3 barchart of texts.', () => {
        render(CorpusPage());
        const dashboard = screen.getByTestId("textBarchart");
        expect(dashboard).toBeInTheDocument();
    })
    it('Renders D3 barchart of witnesses.', () => {
        render(CorpusPage());
        const dashboard = screen.getByTestId("witnessBarchart");
        expect(dashboard).toBeInTheDocument();
    })
})