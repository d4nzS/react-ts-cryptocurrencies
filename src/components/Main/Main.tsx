import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import classes from './Main.module.scss';
import Cryptocurrency from '../../models/cryptocurrency';
import { CRYPTOCURRENCIES_PER_PAGE, CRYPTOCURRENCIES_FIELDS } from './constants';

interface MainProps {
  cryptocurrencies: Cryptocurrency[];
}

const Main: FC<MainProps> = ({ cryptocurrencies }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = Math.ceil(cryptocurrencies.length / CRYPTOCURRENCIES_PER_PAGE);
  const currentPage = Number(searchParams.get('page')) || 1;

  const changeCryptoCurrenciesPageHandler = (page: number): void => {
    setSearchParams({ page: page.toString() });
  };

  const linkToCryptocurrencyHandler = (id: string): void => {
    navigate(id);
  };

  return (
    <main className={classes.main}>
      <nav>
        <ul className={classes['main__nav-list']}>
          {[...new Array(pages)].map((_, i) => (
            <li
              key={i}
              className={classNames(
                classes['main__nav-item'],
                { [classes['main__nav-item_active']]: currentPage === i + 1 }
              )}
              onClick={() => changeCryptoCurrenciesPageHandler(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </nav>
      <table className={classes.main__table}>
        <thead className={classes.main__thead}>
        <tr className={classes.main__tr}>
          {CRYPTOCURRENCIES_FIELDS.map(field => (
            <th
              key={field}
              className={classes.main__th}
            >
              {field}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {cryptocurrencies.slice(
          (currentPage - 1) * CRYPTOCURRENCIES_PER_PAGE,
          (currentPage - 1) * CRYPTOCURRENCIES_PER_PAGE + CRYPTOCURRENCIES_PER_PAGE
        ).map(({ id, rank, name, symbol, priceUsd }) => (
          <tr
            key={id}
            className={classes.main__tr}
            onClick={() => linkToCryptocurrencyHandler(id)}
          >
            <td className={classes.main__td}>{rank}</td>
            <td className={classes.main__td}>{name}</td>
            <td className={classes.main__td}>{symbol}</td>
            <td className={classes.main__td}>{(+priceUsd).toFixed(2)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;