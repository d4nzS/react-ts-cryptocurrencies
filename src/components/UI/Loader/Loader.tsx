import { FC } from 'react';
import { createPortal } from 'react-dom';

import classes from './Loader.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import { ReactComponent as LoaderIcon } from '../../../assets/icons/loader-icon.svg';
import { LOADER_ELEMENT } from './constants';

const Loader: FC = () => {
  return (
    <>
      {createPortal(
        (
          <>
            <Backdrop/>
            <LoaderIcon className={classes.loader}/>
          </>
        ),
        LOADER_ELEMENT
      )}
    </>
  );
};

export default Loader;