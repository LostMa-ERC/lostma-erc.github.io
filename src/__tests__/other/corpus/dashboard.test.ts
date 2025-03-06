import CorpusPage from '@/app/(other)/corpus/page';
import { expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { it } from 'vitest';

describe('Dashboard', () => {
    it('renders dashboard', () => {
        render(CorpusPage());
        const dashboard = screen.getByTestId("langDashboard");
        expect(dashboard).toBeInTheDocument();
    })
})