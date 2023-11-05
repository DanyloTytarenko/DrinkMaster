import notFoundDeck from '../../assets/images/notFound/img-blue-iced-tea-desktop.png';
import notFoundDeck2 from '../../assets/images/notFound/img-blue-iced-tea-desktop@2x.png';
import notFoundMobile from '../../assets/images/notFound/img-blue-iced-tea-mobile.png';
import notFoundMobile2 from '../../assets/images/notFound/img-blue-iced-tea-mobile@2x.png';
import { NotFoundWrapper, TextMessage } from './NotFound.styles';

const NotFound = ({ message }) => {
  return (
    <NotFoundWrapper>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${notFoundDeck} 1x, ${notFoundDeck2} 2x`}
        />
        <source
          media="(min-width: 375px)"
          srcSet={`${notFoundMobile} 1x, ${notFoundMobile2} 2x`}
        />
        <img src={notFoundDeck} alt="not found" />
      </picture>
      <TextMessage>{message}</TextMessage>
    </NotFoundWrapper>
  );
};

export default NotFound;
