import { SinginForm } from '../../components/SinginForm/SinginForm';
import { Title } from '../SingupPage/SingupPage.styled';
import {
  WelcomeBox,
  StyledBGElement6,
  StyledBGElement7,
  StyledBGElement8,
} from '../WelcomePage/WelcomePage.styled';

export default function SinginPage() {
  return (
    <WelcomeBox>
      <Title>Sign In</Title>
      <SinginForm />
      <StyledBGElement6 />
      <StyledBGElement7 />
      <StyledBGElement8 />
    </WelcomeBox>
  );
}
