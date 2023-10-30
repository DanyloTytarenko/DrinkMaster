import * as yup from 'yup';

export const signinSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      'Password ahould contain at least one uppercase and lowercase character',
    )
    .matches(/\d/, 'Password should contain at least one number')
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      'Password should contain at least one special character',
    )
    .required('Password is required'),
});