import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <div>
      Root
      <Outlet/>
    </div>
  );
};

export default RootLayout;