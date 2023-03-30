import { FC } from 'react';
import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import ICryptocurrency from '../models/cryptocurrency';
import Cryptocurrency from '../components/Cryptocurrency/Cryptocurrency';
import CryptocurrencyService from '../services/cryptocurrency-service';
import AsyncWrapper from '../components/Shared/AsyncWrapper';

const CryptocurrencyPage: FC = () => {
  const { cryptocurrency } = useLoaderData() as { cryptocurrency: Promise<ICryptocurrency> }

  return (
    <AsyncWrapper
      promise={cryptocurrency}
      withLoader
    >
      {loadedCryptocurrency => <Cryptocurrency cryptocurrency={loadedCryptocurrency}/>}
    </AsyncWrapper>
  );
};

export default CryptocurrencyPage;

export const cryptocurrencyLoader = ({ params }: LoaderFunctionArgs) => {
  return defer({ cryptocurrency: CryptocurrencyService.getById(params.cryptocurrencyId!) });
};