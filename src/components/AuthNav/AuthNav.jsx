import { AuthLink, Singin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthLink to="/signup">Sign Up</AuthLink>
      <Singin to="/signin">Sign In</Singin>
    </>
  );
};
