import type Masonry from 'masonry-layout';
import { For } from 'solid-js';
import { render, screen } from 'solid-testing-library';
import { MasonryComponent } from './Masonry';

const masonryOptions: Masonry.Options = {
  columnWidth: 60,
};
const childData = ['h4', 'h3', 'h3', 'w2', 'h2'];

describe('Solid Masonry Component', () => {
  describe('Core features', () => {
    test('should render container without crashing', () => {
      render(() => <MasonryComponent />);

      const masonryElement = screen.getByTestId('masonry-container');
      expect(masonryElement).toBeInTheDocument();
      expect(masonryElement.tagName.toLowerCase()).toBe('div');
    });

    test('should render container with correct element type', () => {
      render(() => <MasonryComponent as="ul" />);

      const masonryElement = screen.getByRole('list');
      expect(masonryElement).toBeInTheDocument();
    });

    test('should render container with correct class name', () => {
      const cssClasses = [1, 2, 3].map((value) => `custom-class${value}`);

      render(() => <MasonryComponent class={cssClasses.join(' ')} />);

      const masonryElement = screen.getByTestId('masonry-container');
      cssClasses.forEach((className) => expect(masonryElement).toHaveClass(className));
    });

    test('should render container with children', () => {
      render(() => (
        <MasonryComponent as="ul" options={masonryOptions}>
          <For each={childData}>{(child) => <li class={`item ${child}`}>${child}</li>}</For>
        </MasonryComponent>
      ));

      const childElements = screen.getAllByRole('listitem');
      expect(childElements).toHaveLength(5);
    });

    test('should apply masonry layout logic', () => {
      render(() => (
        <MasonryComponent class="container" as="ul" options={masonryOptions}>
          <For each={childData}>{(child) => <li class={`item ${child}`}>${child}</li>}</For>
        </MasonryComponent>
      ));

      const childElements = screen.getAllByRole('listitem');
      const positions = [
        {
          left: 0,
          top: 0,
        },
        {
          left: 60,
          top: 0,
        },
        {
          left: 120,
          top: 0,
        },
        {
          left: 60,
          top: 70,
        },
        {
          left: 0,
          top: 90,
        },
      ];

      for (let i = 0; i < childElements.length; i += 1) {
        expect(childElements[i]).toHaveStyle(`left: ${positions[i].left}px`);
        expect(childElements[i]).toHaveStyle(`top: ${positions[i].top}px`);
      }
    });

    test.todo('should provide reference to the masonry instance');
  });
});
