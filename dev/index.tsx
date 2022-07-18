import type Masonry from 'masonry-layout';
import { Component, For } from 'solid-js';
import { render } from 'solid-js/web';
import { MasonryComponent } from '../src/Masonry';

import './test.css';

const App: Component = () => {
  const masonryOptions: Masonry.Options = {
    columnWidth: 60,
    itemSelector: '.item',
  };
  const childData = ['h4', 'h3', 'h3', 'w2', 'h2'];

  return (
    <MasonryComponent class="container" as="ul" options={masonryOptions}>
      <For each={childData}>{(child) => <li class={`item ${child}`}>{child}</li>}</For>
    </MasonryComponent>
  );
};

const container = document.getElementById('root');
if (container != null) {
  render(() => <App />, container);
}
