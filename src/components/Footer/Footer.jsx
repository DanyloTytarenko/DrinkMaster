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
  LogoFollowNavWrap,
  Container,
  StyledBGElement3,
  StyledBGElement4,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      {/* <MainAppContainer> */}
      <Container>
        <MainWrap>
          <LogoFollowNavWrap>
            <LogoFollowWrap>
              <Logo theme='dark'/>
              <FollowUs theme='dark' />
            </LogoFollowWrap>
            <FooterNav />
          </LogoFollowNavWrap>
          <SubscribeForm />
        </MainWrap>
        <FooterRightsAndPolicy />
        <StyledBGElement3 />
        <StyledBGElement4 />
        {/* </MainAppContainer> */}
      </Container>
    </FooterContainer>
  );
};

export default Footer;
