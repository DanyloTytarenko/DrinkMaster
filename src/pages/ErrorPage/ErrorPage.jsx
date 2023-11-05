import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

import errorImgDesk from '../../assets/images/errorPage/img-blue-iced-tea-error-desktop.png';
import errorImgDesk2 from '../../assets/images/errorPage/img-blue-iced-tea-error-desktop@2x.png';
import errorImgMobile from '../../assets/images/errorPage/img-blue-iced-tea-error-mobile.png';
import errorImgMobile2 from '../../assets/images/errorPage/img-blue-iced-tea-error-mobile@2x.png';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div>
        <span>4</span>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${errorImgDesk} 1x, ${errorImgDesk2} 2x`}
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${errorImgMobile} 1x, ${errorImgMobile2} 2x`}
          />
          <img src={errorImgDesk} alt="error 404" />
        </picture>
        <span>4</span>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
