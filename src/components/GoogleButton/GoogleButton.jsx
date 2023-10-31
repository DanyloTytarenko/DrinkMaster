import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { buttonStyled } from '../SingupForm/muiFormStyled';

export const GoogleButton = () => {
    const handleButtonClick = () => {
        
    }

    return (
        <Button
            onClick={handleButtonClick}
          sx={{ ...buttonStyled, textTransform: 'none' }}
          variant="contained"
          fullWidth
          type="button"
          startIcon={<GoogleIcon sx={{mr: '4px'}}/>}
        >
          Sing up with Google
        </Button>
    )
}