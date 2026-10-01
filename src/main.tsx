// Safe fetch descriptor shim to prevent "Cannot set property fetch of #<Window> which has only a getter"
try {
  const originalFetch = window.fetch;
  let currentFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return currentFetch || originalFetch;
    },
    set(fn) {
      currentFetch = fn;
    },
    configurable: true,
    enumerable: true
  });
} catch (e) {
  // Ignore
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);

