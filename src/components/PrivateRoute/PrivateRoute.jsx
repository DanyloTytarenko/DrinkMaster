import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'src/redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return isAuthenticated ? children : <Navigate to="/signin"></Navigate>;
};
