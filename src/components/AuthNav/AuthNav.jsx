import { ButtonBox, AuthLink, Signin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ButtonBox>
      <AuthLink to="/signup">Sign Up</AuthLink>
      <Signin to="/signin">Sign In</Signin>
    </ButtonBox>
  );
};
