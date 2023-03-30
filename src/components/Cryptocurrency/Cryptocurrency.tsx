import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Cryptocurrency.module.scss';
import ICryptocurrency from '../../models/cryptocurrency';
import { roundToTwoDecimalPlaces } from './utils';

interface CryptocurrencyProps {
  cryptocurrency: ICryptocurrency;
}

const Cryptocurrency: FC<CryptocurrencyProps> = ({ cryptocurrency }) => {
  const navigate = useNavigate();

  const linkToMainPage = (): void => {
    navigate(-1);
  };

  return (
    <main className={classes.main}>
      <button
        className={classes['main__button-link']}
        onClick={linkToMainPage}
      >
        Back to Main Page
      </button>
      <ul className={classes.main__list}>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Rank:
          </span>
          <span>
            {cryptocurrency.rank}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Name:
          </span>
          <span>
            {cryptocurrency.name}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Symbol:
          </span>
          <span>
            {cryptocurrency.symbol}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Supply:
          </span>
          <span>
            {+cryptocurrency.supply}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Total Quantity of Asset Issued:
          </span>
          <span>
            {+cryptocurrency.maxSupply}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Price USD:
          </span>
          <span>
            {roundToTwoDecimalPlaces(cryptocurrency.priceUsd)}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Supply * Price USD:
          </span>
          <span>
            {roundToTwoDecimalPlaces(cryptocurrency.marketCapUsd)}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Change Percent (24 hr):
          </span>
          <span>
            {roundToTwoDecimalPlaces(cryptocurrency.changePercent24Hr)}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Trading Volume USD (24 hr):
          </span>
          <span>
            {roundToTwoDecimalPlaces(cryptocurrency.volumeUsd24Hr)}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
           Weighted Average Price (24 hr):
          </span>
          <span>
            {roundToTwoDecimalPlaces(cryptocurrency.vwap24Hr)}
          </span>
        </li>
        <li className={classes['main__list-item']}>
          <span className={classes.main__prop}>
            Explorer:
          </span>
          <span>
            {cryptocurrency.explorer}
          </span>
        </li>
      </ul>
    </main>
  );
};

export default Cryptocurrency;