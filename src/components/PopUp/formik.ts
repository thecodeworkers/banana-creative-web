import { useFormik } from 'formik';
import * as Yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

type Messages = {
  required: string,
  invalid: string,
}

export const FormikConfig = (handleSubmit: any, messages: Messages) =>
  useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required(messages.required)
        .matches(emailRegex, messages.invalid),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
