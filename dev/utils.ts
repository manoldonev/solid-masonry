import { readFile } from 'fs/promises';

const injectTestCss = async (): Promise<void> => {
  try {
    const twStyle = document.createElement('style');
    twStyle.id = 'test-style';
    twStyle.innerHTML = await readFile('./dev/test.css', 'utf-8');
    document.head.appendChild(twStyle);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export { injectTestCss };
