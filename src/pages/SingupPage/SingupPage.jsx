import { SingupForm } from '../../components/SingupForm/SingupForm';
import { Title } from './SingupPage.styled';
import {
  WelcomeBox,
  StyledBGElement6,
  StyledBGElement7,
  StyledBGElement8,
} from '../WelcomePage/WelcomePage.styled';

export default function SingupPage() {
  return (
    <WelcomeBox>
      <Title>Sign Up</Title>
      <SingupForm />
      <StyledBGElement6 />
      <StyledBGElement7 />
      <StyledBGElement8 />
    </WelcomeBox>
  );
}
