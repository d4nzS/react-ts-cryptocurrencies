import { ReactNode, Suspense } from 'react';
import { Await } from 'react-router-dom';

import Loader from '../UI/Loader/Loader';

interface AsyncWrapperProps<T> {
  promise: Promise<T>;
  withLoader?: boolean;
  children: (loadedEntity: T) => ReactNode;
}

const AsyncWrapper = <T, >({
                             promise,
                             withLoader,
                             children
                           }: AsyncWrapperProps<T>): JSX.Element => {
  return (
    <Suspense fallback={withLoader && <Loader/>}>
      <Await resolve={promise}>
        {children}
      </Await>
    </Suspense>
  )
};

export default AsyncWrapper;