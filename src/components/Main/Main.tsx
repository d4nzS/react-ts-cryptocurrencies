import { FC, useState } from 'react';
import classNames from 'classnames';

import classes from './Main.module.scss';
import Cryptocurrency from '../../models/cryptocurrency';
import { CRYPTOCURRENCIES_PER_PAGE, CRYPTOCURRENCIES_FIELDS } from './constants';

interface MainProps {
  cryptocurrencies: Cryptocurrency[];
}

const Main: FC<MainProps> = ({ cryptocurrencies }) => {
  const pages = Math.ceil(cryptocurrencies.length / CRYPTOCURRENCIES_PER_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <main className={classes.main}>
      <nav>
        <ul className={classes['main__nav-list']}>
          {[...new Array(pages)].map((_, i) => (
            <li
              className={classNames(
                classes['main__nav-item'],
                { [classes['main__nav-item_active']]: currentPage === i }
              )}
              onClick={() => setCurrentPage(i)}
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
              key={field }
              className={classes.main__th}
            >
              {field}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {cryptocurrencies.slice(
          currentPage * CRYPTOCURRENCIES_PER_PAGE,
          currentPage * CRYPTOCURRENCIES_PER_PAGE + CRYPTOCURRENCIES_PER_PAGE
        ).map(({ id, rank, name, symbol, priceUsd }) => (
          <tr key={id} className={classes.main__tr}>
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