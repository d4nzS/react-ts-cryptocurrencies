import { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ApiUrlsConstants from './constants/urls';
import RootLayout from './pages/RootLayout';
import MainPage from './pages/MainPage';
import CryptocurrencyPage from './pages/CryptocurrencyPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to={ApiUrlsConstants.CRYPTOCURRENCIES}/>,
      },
      {
        path: ApiUrlsConstants.CRYPTOCURRENCIES,
        element: <MainPage/>
      },
      {
        path: `${ApiUrlsConstants.CRYPTOCURRENCIES}/:cryptocurrencyId`,
        element: <CryptocurrencyPage/>
      }
    ]
  }
]);

const App: FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
