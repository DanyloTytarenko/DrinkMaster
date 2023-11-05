import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

import errorImgDesk from '../../assets/images/errorPage/img-blue-iced-tea-error-desktop.png';
import errorImgDesk2 from '../../assets/images/errorPage/img-blue-iced-tea-error-desktop@2x.png';
import errorImgMobile from '../../assets/images/errorPage/img-blue-iced-tea-error-mobile.png';
import errorImgMobile2 from '../../assets/images/errorPage/img-blue-iced-tea-error-mobile@2x.png';
import {
  ErrorContainer,
  ErrorWrapper,
  StyledFirstSymbol,
  StyledSecondSymbol,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <ErrorContainer>
        <ErrorWrapper>
          <StyledFirstSymbol>4</StyledFirstSymbol>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${errorImgDesk} 1x, ${errorImgDesk2} 2x`}
              width="158"
              height="201"
            />
            <source
              media="(min-width: 375px)"
              srcSet={`${errorImgMobile} 1x, ${errorImgMobile2} 2x`}
              width="123"
              height="156"
            />
            <img src={errorImgDesk} alt="error 404" width="123" height="156" />
          </picture>
          <StyledSecondSymbol>4</StyledSecondSymbol>
        </ErrorWrapper>
      </ErrorContainer>
      <Footer />
    </>
  );
};

export default ErrorPage;
