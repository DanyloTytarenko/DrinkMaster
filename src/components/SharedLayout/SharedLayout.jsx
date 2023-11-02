import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      {/* <Suspense fallback={< Loader />}> */}
      <Suspense fallback={null}>
        {/* <Suspense fallback={<div>Loading page...</div>}> */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;



