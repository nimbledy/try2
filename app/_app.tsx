// _app.tsx
import { useClient } from 'next/data-client';

function MyApp({ Component, pageProps }) {
  const ComponentWithClient = useClient(Component); // Обернуть каждую страницу в useClient
  return <ComponentWithClient {...pageProps} />;
}

export default MyApp;
