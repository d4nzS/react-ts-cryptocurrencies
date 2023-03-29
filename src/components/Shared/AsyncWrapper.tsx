import { ReactNode, Suspense } from 'react';
import { Await } from 'react-router-dom';

import Loader from '../UI/Loader/Loader';

interface AsyncWrapperProps<T> {
  promise: Promise<T>;
  children: (loadedEntity: T) => ReactNode;
}

const AsyncWrapper = <T, >({
                             promise,
                             children
                           }: AsyncWrapperProps<T>): JSX.Element => {
  return (
    <Suspense fallback={<Loader/>}>
      <Await resolve={promise}>
        {children}
      </Await>
    </Suspense>
  )
};

export default AsyncWrapper;