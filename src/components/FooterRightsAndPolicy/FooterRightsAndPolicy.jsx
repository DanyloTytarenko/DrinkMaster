import { RightsAndPolicyWrap, AllRightsText, PolicyLinksWrap, Link } from './FooterRightsAndPolicy.styled';

const FooterRightsAndPolicy = () => {
  return (
    <RightsAndPolicyWrap>
      <AllRightsText>&copy;2023 Drink Master. All rights reserved.</AllRightsText>
      <PolicyLinksWrap>
        <Link to={'/privacy'}>Privacy Policy</Link>
        <Link to={'/service'}>Terms of Service</Link>
      </PolicyLinksWrap>
    </RightsAndPolicyWrap>
  );
};

export default FooterRightsAndPolicy;