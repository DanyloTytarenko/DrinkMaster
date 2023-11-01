import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'src/redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return isAuthenticated ? Component : <Navigate to={redirectTo}></Navigate>;
};
