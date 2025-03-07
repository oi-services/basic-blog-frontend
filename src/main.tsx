import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { router } from './router';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return await worker.start({ onUnhandledRequest: 'bypass' });
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
});
