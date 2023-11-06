import * as yup from 'yup';

export const signinSchema = yup.object({
  email: yup
    .string('Enter your email')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Email format: test@mail.com',
    )
    .email('Email format: test@mail.com')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      'Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character'
    )
    .matches(/\d/, 'Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character')
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      'Password should be of minimum 8 characters length, contain at least one uppercase and lowercase character, at least one number, at least one special character'
    )
    .required('Password is required'),
});