import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { subscribeEmail } from "../../redux/auth/operations";
import {
  Form,
  SubscribeFormInput,
  SubscribeButton,
  SubscribeTitle,
} from "./SubscribeForm.styled";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("This is an ERROR email"),
});

const ErrorMessage = ({ message }) => (
  <div
    style={{
      color: "#DA1414",
      fontSize: "12px",
      lineHeight: "14px",
      marginTop: "2px",
      marginBottom: "2px",
      marginLeft: "24px",
    }}
  >
    {message}
  </div>
);

const SuccessMessage = () => (
  <div
    style={{
      color: "#3CBC81",
      fontSize: "12px",
      lineHeight: "14px",
      marginTop: "2px",
      marginBottom: "2px",
      marginLeft: "24px",
    }}
  >
    This is an CORRECT email
  </div>
);

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      dispatch(subscribeEmail(values));
      setIsEmailValid(false);
      actions.resetForm();
    },
  });

  const isEmailError = formik.touched.email && formik.errors.email;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <SubscribeTitle>
        Subscribe up to our newsletter. Be in touch with the latest news and
        special offers, etc.
      </SubscribeTitle>

      <SubscribeFormInput
        id="email"
        name="email"
        type="email"
        placeholder="Enter the email"
        onChange={e => {
          formik.handleChange(e);
          if (schema.isValidSync({ email: e.target.value })) {
            setIsEmailValid(true);
          } else {
            setIsEmailValid(false);
          }
        }}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        className={isEmailError ? "error" : isEmailValid ? "valid" : ""}
      />

      {isEmailError ? (
        <ErrorMessage message={formik.errors.email} />
      ) : isEmailValid ? (
        <SuccessMessage />
      ) : null}

      <SubscribeButton type="submit" disabled={isEmailError}>
        Subscribe
      </SubscribeButton>
    </Form>
  );
};

export default SubscribeForm;
