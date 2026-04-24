import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function ThemeTestComponent() {
  return <div data-testid="bg" className="bg-[#050B14] text-[#00F0FF]">Cloniq Theme</div>;
}

describe('Theme Configuration', () => {
  it('should render theme colors without error', () => {
    const { getByTestId } = render(<ThemeTestComponent />);
    expect(getByTestId('bg')).toBeDefined();
  });
});
