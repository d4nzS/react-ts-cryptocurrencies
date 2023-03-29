import { FC } from 'react';
import { defer, Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import Header from '../components/Header/Header';
import CryptocurrencyService from '../services/cryptocurrency-service';

const RootLayout: FC = () => {
  const { cryptocurrencies } = useLoaderData() as { cryptocurrencies: Promise<void> };

  return (
    <>
      <ScrollRestoration/>
      <Header/>
      <Outlet/>
    </>
  );
};

export default RootLayout;

export const rootLoader = () => {
  return defer({ cryptocurrencies: CryptocurrencyService.getAll() });
}