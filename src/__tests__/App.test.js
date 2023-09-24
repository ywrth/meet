// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    test('renders list of events', () => {
        // eslint-disable-next-line testing-library/no-node-access
        const AppDOM = render(<App />).container.firstChild;
        // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });
});