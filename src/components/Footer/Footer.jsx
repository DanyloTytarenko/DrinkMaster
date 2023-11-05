import Logo from '../Logo/Logo';
import FooterNav from '../FooterNav/FooterNav';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import FooterRightsAndPolicy from '../FooterRightsAndPolicy/FooterRightsAndPolicy';

import {
  FooterContainer,
  FooterWrap,
  MainWrap,
  LogoFollowWrap,
  LogoFollowNavWrap
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <MainWrap>
          <LogoFollowNavWrap>
            <LogoFollowWrap>
              <Logo />
              <FollowUs />
            </LogoFollowWrap>
            <FooterNav />
          </LogoFollowNavWrap>
          <SubscribeForm />
        </MainWrap>
        <FooterRightsAndPolicy />
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
