import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Link,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControl,
  ThemeProvider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useFormik } from 'formik';
import { signinSchema } from './SinginSchema';
import { logIn } from '../../redux/auth/operations';
import { Form } from '../SingupForm/SingupForm.styled';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import {
  inputProps,
  outlineStyled,
  outlineError,
  outlineSucces,
  buttonStyled,
  linkStyled,
  iconStyled,
  theme,
} from '../SingupForm/muiFormStyled';

export const SinginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={theme}>
          <FormControl sx={{ width: '100%' }}>
            <OutlinedInput
              fullWidth
              name="email"
              placeholder="Email"
              autoComplete="off"
              sx={{
                zIndex: 5,
                ...outlineStyled,
                ...(formik.touched.email &&
                  Boolean(formik.errors.email) && { ...outlineError }),
                ...(formik.values.email &&
                  Boolean(!formik.errors.email) && { ...outlineSucces }),
              }}
              inputProps={{ ...inputProps }}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              required
              endAdornment={[
                formik.values.email && Boolean(!formik.errors.email) && (
                  <CheckCircleOutlineIcon key={1} sx={{ color: 'green' }} />
                ),
                formik.touched.email && Boolean(formik.errors.email) && (
                  <ErrorOutlineIcon key={2} sx={{ color: 'red' }} />
                ),
              ]}
            />
            {formik.touched.email && Boolean(formik.errors.email) && (
              <FormHelperText error id="email">
                {formik.errors.email}
              </FormHelperText>
            )}
            {formik.values.email && Boolean(!formik.errors.email) && (
              <FormHelperText sx={{ color: 'green' }} id="email">
                This is a CORRECT email
              </FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              sx={{
                zIndex: 5,
                ...outlineStyled,
                mt: '14px',
                ...(formik.touched.password &&
                  Boolean(formik.errors.password) && { ...outlineError }),
                ...(formik.values.password &&
                  Boolean(!formik.errors.password) && { ...outlineSucces }),
              }}
              inputProps={{ ...inputProps }}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ ...iconStyled }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {formik.touched.password && Boolean(formik.errors.password) && (
              <FormHelperText error id="password">
                {formik.errors.password}
              </FormHelperText>
            )}
            {formik.values.password && Boolean(!formik.errors.password) && (
              <FormHelperText sx={{ color: 'green' }} id="password">
                This is a CORRECT password
              </FormHelperText>
            )}
          </FormControl>
          <Button
            sx={{ zIndex: 5, ...buttonStyled }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>

          <Link
            component={NavLink}
            sx={{ zIndex: 5, ...linkStyled }}
            to="/signup"
          >
            Sign Up
          </Link>
        </ThemeProvider>
      </Form>
    </div>
  );
};
