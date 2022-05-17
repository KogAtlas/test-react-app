import { render } from '@testing-library/react';
import MyComponent, { testFunction } from './MyComponent';

test('my component\'s test', () => {
  render(<MyComponent />);
  testFunction();
});
