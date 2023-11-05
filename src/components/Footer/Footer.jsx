import FooterNav from '../FooterNav/FooterNav';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Logo from '../Logo/Logo';

import {
  FooterContainer, FooterWrap, MainWrap, LogoFollowWrap, LogoFollowNavWrap, AllRightsWrap, AllRightsText
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
        <AllRightsWrap>
          <AllRightsText>©2023 Drink Master. All rights reserved.</AllRightsText>
        </AllRightsWrap></FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
