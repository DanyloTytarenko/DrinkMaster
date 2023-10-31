import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { MainContainer, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Main>
        <Suspense fallback={< Loader />}>
          {/* <Suspense fallback={null}> */}
          {/* <Suspense fallback={<div>Loading page...</div>}> */}
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </MainContainer>
  );
};

export default SharedLayout;
