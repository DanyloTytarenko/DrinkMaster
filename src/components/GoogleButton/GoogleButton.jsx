import { useDispatch } from 'react-redux';
// import { loginWithGoogle } from 'src/redux/auth/operations';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { buttonStyled } from '../SingupForm/muiFormStyled';

export const GoogleButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // dispatch(loginWithGoogle());
  };

  return (
    <a href="https://drinks-whm4.onrender.com/auth/google">
      <Button
        onClick={handleButtonClick}
        sx={{ ...buttonStyled, textTransform: 'none' }}
        variant="contained"
        fullWidth
        type="button"
        startIcon={<GoogleIcon sx={{ mr: '4px' }} />}
      >
        Sign in with Google
      </Button>
    </a>
  );
};
