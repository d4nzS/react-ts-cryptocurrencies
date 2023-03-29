import { FC } from 'react';

import classes from './Header.module.scss';
import Cryptocurrency from '../../models/cryptocurrency';

interface HeaderProps {
  mostExpensiveCryptocurrencies: Cryptocurrency[];
}

const Header: FC<HeaderProps> = ({ mostExpensiveCryptocurrencies }) => {
  return (
    <header className={classes.header}>
      <ul>
        {mostExpensiveCryptocurrencies.map(({ symbol, priceUsd }) => (
          <li key={symbol} className={classes.header__cryptocurrency}>
            {symbol}: <span className={classes.header__price}>{(+priceUsd).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </header>
  )
};

export default Header;