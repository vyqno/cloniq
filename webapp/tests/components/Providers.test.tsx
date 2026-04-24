import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Providers } from '../../src/components/Providers';

describe('Providers Wrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Providers>
        <div>Test Child</div>
      </Providers>
    );
    expect(getByText('Test Child')).toBeDefined();
  });
});
