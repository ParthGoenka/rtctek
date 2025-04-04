import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

function App() {
  return(
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={schema}         
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>
      <div>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />
      </div>
      <div>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
}

export default App





