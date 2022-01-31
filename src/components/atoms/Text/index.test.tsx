import {render, screen} from '@testing-library/react'
import Text from './';


test('Text works well', () => {
  render(
    <Text label="Text" testId="text" />,
  );
  const elementByTestId = screen.getByTestId('text');
  expect(elementByTestId?.className).toEqual('text-base text-black');
  expect(screen.getByText('Text')).toBeInTheDocument();
});
