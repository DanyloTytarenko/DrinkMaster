import styled from 'styled-components';
import { colors } from '../../colors';

export const AddDrinkWrapper = styled.div`
  display: flex;
`;

export const AppDescription = styled.p`
width: 500px;
font-size: 14px;
line-height: 20px;
color: ${colors.light};
margin-bottom: 32px;
@media only screen and (min-width: 704px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1140px) {
width: 500px;
margin-bottom: 40px;
`;

export const AddDrinksButton = styled.button`
display: flex;
width: 151px;
height:46px;
padding: 14px 40px;
justify-content: center;
align-items: flex-start;
color: ${colors.secondaryDark}
background: ${colors.light};
border-radius: 42px;
margin-bottom: 47px;
color: #161F37;
font-size: 14px;
font-weight: 600;
@media only screen and (min-width: 704px) {
width: 169px;
height: 54px;
padding: 18px 44px;
font-size: 16px;
margin-bottom: 54px;
};
@media only screen and (min-width: 1140px) {
width: 160px;
`;

export const HomePageImage = styled.img`
  width: 252px;
  height: 313px;
  flex-shrink: 0;
  background:
    url(https://s3-alpha-sig.figma.com/img/8315/d674/bc624a3df7d7c296328b21259edaf96a?Expires=1699228800&Signature=fvCP9PwT5ViI4bfwzC78BEMp46Lnqs4V6YuRn0hBtcd393T7kP0SzTk6gvAbIjmemvxzm2mmouQMUybHMKVJxARscd2P1qQ7G739-9L4HI6chHVlGleTrJzPCy7YUnz2ae~9JIspOW3Eg4GmkWWFSr44kgkAB~kHwOk8r1~uvKixvqimKwdo7aPApbHjpIBToxH0OYQsLJ3n3bM3PrwGmPVDQyEuo6OZaA9yG9GuG5DoB9L8CY-50okCku7ooo0UXfQfsy0crah5SCTX96XEI~jY3wyAak5qvD~lPMgr~09M4bbrnJoZvFV8nqNXkIqBmLp5s2ZcQel7x5n-WOmmtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4),
    lightgray -28.343px -16.178px / 133.644% 107.865% no-repeat;
  margin: auto;
  @media only screen and (min-width: 704px) {
    width: 359px;
    height: 445px;
  }
`;
