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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { signupSchema } from './SingupSchema';
import { register } from '../../redux/auth/operations';
import { Form } from './SingupForm.styled';
import {
  inputStyled,
  inputProps,
  datePickerStyled,
  outlineStyled,
  buttonStyled,
  linkStyled,
} from './muiFormStyled';

export const SingupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      email: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const birth = new Date(values.birthday).toLocaleDateString('en-uk');
      dispatch(register({ ...values, birthday: birth }));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="off"
          sx={{...inputStyled}}
          inputProps={{ ...inputProps }}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="birthday"
            name="birthday"
            
            disableFuture
            format={'DD/MM/YYYY'}
            slotProps={{
              textField: {
                error: false,
                sx: {
                  ...datePickerStyled,
                }
              },
            }}
            value={formik.values.birthday}
            onChange={(newDate) => {
              formik.setFieldValue('birthday', newDate);
            }}
            error={formik.touched.birthday && Boolean(formik.errors.birthday)}
            required
          />
        </LocalizationProvider>
        {formik.touched.birthday && (
          <FormHelperText error id="birthday">
            {formik.errors.birthday}
          </FormHelperText>
        )}
        <TextField
          fullWidth
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          sx={{ ...inputStyled, mt: '14px' }}
          inputProps={{ ...inputProps }}
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
                sx={{ color: '#F3F3F3' }}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        {formik.touched.password && (
          <FormHelperText error id="password">
            {formik.errors.password}
          </FormHelperText>
        )}
        <Button
          sx={{ ...buttonStyled }}
          variant="contained"
          fullWidth
          type="submit"
        >
          Sing Up
        </Button>
        <Link sx={{ ...linkStyled }} component={NavLink} to="/singin">
          Sing In
        </Link>
      </Form>
    </div>
  );
};
