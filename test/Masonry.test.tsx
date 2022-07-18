import { render } from 'solid-testing-library';
import { Masonry } from '../src/Masonry';

describe('Masonry grid layout', () => {
  test('should render without crashing', () => {
    render(() => <Masonry />);
  });
});
