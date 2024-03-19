import { useFormik } from 'formik';
import * as Yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const FormikConfig = (handleSubmit: any, messages: string[]) =>
  useFormik({
    initialValues: {
      company: '',
      email: '',
      subject: '',
    },

    validationSchema: Yup.object({
      company: Yup.string().required(messages[0]),
      email: Yup.string()
        .required(messages[0])
        .matches(emailRegex, messages[1]),
      subject: Yup.string().required(messages[0]),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
