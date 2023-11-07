import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Suspense Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
