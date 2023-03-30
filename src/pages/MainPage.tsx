import { FC } from 'react';
import  { defer, useLoaderData } from 'react-router-dom';

import Cryptocurrency from '../models/cryptocurrency';
import Main from '../components/Main/Main';
import CryptocurrencyService from '../services/cryptocurrency-service';
import AsyncWrapper from '../components/Shared/AsyncWrapper';

const MainPage: FC = () => {
  const { cryptocurrencies } = useLoaderData() as { cryptocurrencies: Promise<Cryptocurrency[]> };

  return (
    <AsyncWrapper
      promise={cryptocurrencies}
      withLoader
    >
      {(loadedCryptocurrencies) => <Main cryptocurrencies={loadedCryptocurrencies}/>}
    </AsyncWrapper>
  );
};

export default MainPage;

export const mainLoader = () => {
  return defer({ cryptocurrencies: CryptocurrencyService.getAll() });
};