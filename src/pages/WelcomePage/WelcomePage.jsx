import { AuthNav } from '../../components/AuthNav/AuthNav';
import {
  WelcomeBox,
  Title,
  WelcomeText,
  StyledBGElement6,
  StyledBGElement7,
  StyledBGElement8,
} from './WelcomePage.styled';
import { CocktailIcon } from 'src/components/CocktailIcon/CocktailIcon';

export default function WelcomePage() {
  return (
    <WelcomeBox>
      <Title>Welcome to the app! <CocktailIcon/></Title>
      <WelcomeText>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </WelcomeText>
      <StyledBGElement6 />
      <StyledBGElement7 />
      <StyledBGElement8 />
      <AuthNav />
    </WelcomeBox>
  );
}
