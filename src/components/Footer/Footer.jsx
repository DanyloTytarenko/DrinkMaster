import Logo from '../Logo/Logo';
import FooterNav from '../FooterNav/FooterNav';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import FooterRightsAndPolicy from '../FooterRightsAndPolicy/FooterRightsAndPolicy';
import MainAppContainer from '../MainAppContainer/MainAppContainer';

import {
  FooterContainer,
  MainWrap,
  LogoFollowWrap,
  LogoFollowNavWrap
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <MainAppContainer>
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
      </MainAppContainer>
    </FooterContainer>
  );
};

export default Footer;
