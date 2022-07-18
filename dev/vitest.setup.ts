import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { injectTestCss } from './utils';

beforeAll(async () => injectTestCss());
