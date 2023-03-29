import { FC, useEffect } from 'react';

import classes from './Backdrop.module.scss';

const Backdrop: FC = () => {
  useEffect(() => {
    const bodyStyles = document.body.style;

    bodyStyles.overflow = 'hidden';

    return () => {
      bodyStyles.overflow = 'auto';
    };
  }, []);

  return <div className={classes.backdrop}/>;
};

export default Backdrop;