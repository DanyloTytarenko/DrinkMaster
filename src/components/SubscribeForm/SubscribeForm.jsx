
import { useFormik } from "formik";
// import * as Yup from 'yup';
import { Form, SubscribeFormInput, SubscribeButton, SubscribeTitle } from './SubscribeForm.styled';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Must be a valid email, example@mail.com')
//     .required('Email is required'),
// });

const SubscribeForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    // validationSchema: { schema },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
    }
  });

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
      />
      <SubscribeButton type="submit">Subscribe</SubscribeButton>
    </Form>
  );
};

export default SubscribeForm;


