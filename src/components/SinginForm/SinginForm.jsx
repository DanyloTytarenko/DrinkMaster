import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Link,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FormHelperText,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { signinSchema } from './SinginSchema';
import { logIn } from '../../redux/auth/operations';
import { Form } from '../SingupForm/SingupForm.styled';
import { inputStyled, inputProps, outlineStyled } from '../SingupForm/muiFormStyled';

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
      console.log(values)
      dispatch(logIn(values));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          sx={{ ...inputStyled }}
          inputProps={{...inputProps}}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
        <OutlinedInput
          fullWidth
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          sx={{ ...outlineStyled }}
          inputProps={{...inputProps}}
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
                sx={{ color: '#F3F3F3' }}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        {formik.touched.password && <FormHelperText id="password">{formik.errors.password}</FormHelperText>}
        <Button variant="contained" fullWidth type="submit">
          Sing In
        </Button>
        <Link component={NavLink} to="/singup">
          Sing Up
        </Link>
      </Form>
    </div>
  );
};
