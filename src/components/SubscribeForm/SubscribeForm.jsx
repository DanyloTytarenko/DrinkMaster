import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { subscribeEmail } from '../../redux/auth/operations';
import { Form, SubscribeFormInput, SubscribeButton, SubscribeTitle } from './SubscribeForm.styled';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('This is an ERROR email')
});

// коли та якщо буде загальний компонент ErrorMessage для всіх форм, замінити на нього 
const ErrorMessage = ({ message }) => (
  <div style={{ color: '#DA1414', fontSize: '12px', lineHeight: '14px', marginTop: '2px', marginBottom: '2px', marginLeft: '24px' }}>
    {message}
  </div>
)

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const [errorVisible, setErrorVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      if (formik.errors.email) {
        setErrorVisible(true);
      } else {
        setErrorVisible(false);
      }
      dispatch(subscribeEmail(values));
      actions.resetForm();
    }
  });

  const isFormValid = formik.dirty && !formik.errors.email;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <SubscribeTitle>
        Subscribe up to our newsletter. Be in touch with latest news and
        special offers, etc.
      </SubscribeTitle>

      <SubscribeFormInput
        id="email"
        name="email"
        type="email"
        placeholder="Enter the email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        // className={formik.errors.email ? 'error' : ''}
        className={errorVisible ? '' : (formik.errors.email ? 'error' : '')}
      />

      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage message={formik.errors.email} />
      ) : null}

      <SubscribeButton type="submit" disabled={!isFormValid}>Subscribe</SubscribeButton>
    </Form>
  );
};

export default SubscribeForm;

