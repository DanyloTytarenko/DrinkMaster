import { AuthLink, Singin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthLink to="/signup">Sing Up</AuthLink>
      <Singin to="/signin">Sing In</Singin>
    </>
  );
};
