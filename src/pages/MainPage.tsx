import { FC } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import AsyncWrapper from '../components/Shared/AsyncWrapper';

const MainPage: FC = () => {
  const { cryptocurrencies } = useRouteLoaderData('root') as { cryptocurrencies: Promise<any> };

  return (
    <AsyncWrapper promise={cryptocurrencies}>
      {() => (
        <div>
          Main
        </div>
      )}
    </AsyncWrapper>
  );
};

export default MainPage