import { render } from '@testing-library/react';
import YourComponent, { testFunction } from './YourComponent';

test('my component\'s test', () => {
  render(<YourComponent />);
  testFunction();
});
