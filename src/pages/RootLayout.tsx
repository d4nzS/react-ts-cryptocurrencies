import { FC } from 'react';
import { defer, Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import AsyncWrapper from '../components/Shared/AsyncWrapper';
import Header from '../components/Header/Header';
import Cryptocurrency from '../models/cryptocurrency';
import CryptocurrencyService from '../services/cryptocurrency-service';

const RootLayout: FC = () => {
  const { mostExpensiveCryptocurrencies } = useLoaderData() as { mostExpensiveCryptocurrencies: Promise<Cryptocurrency[]> };

  return (
    <>
      <ScrollRestoration/>
      <AsyncWrapper promise={mostExpensiveCryptocurrencies}>
        {cryptocurrencies => <Header mostExpensiveCryptocurrencies={cryptocurrencies}/>}
      </AsyncWrapper>
      <Outlet/>
    </>
  );
};

export default RootLayout;

export const rootLoader = () => {
  return defer({ mostExpensiveCryptocurrencies: CryptocurrencyService.getMostExpensive() });
}