import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        {/* <Suspense fallback={<div>Loading page...</div>}> */}
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
