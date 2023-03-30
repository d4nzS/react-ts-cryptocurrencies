import { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import AppUrlsConstants from './constants/urls';
import RootLayout, { rootLoader } from './pages/RootLayout';
import MainPage, { mainLoader } from './pages/MainPage';
import CryptocurrencyPage, { cryptocurrencyLoader } from './pages/CryptocurrencyPage';

const router = createBrowserRouter([
  {
    path: '',
    id: 'root',
    element: <RootLayout/>,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Navigate to={AppUrlsConstants.CRYPTOCURRENCIES}/>,
      },
      {
        path: AppUrlsConstants.CRYPTOCURRENCIES,
        element: <MainPage/>,
        loader: mainLoader
      },
      {
        path: `${AppUrlsConstants.CRYPTOCURRENCIES}/:cryptocurrencyId`,
        element: <CryptocurrencyPage/>,
        loader: cryptocurrencyLoader
      }
    ]
  }
]);

const App: FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
