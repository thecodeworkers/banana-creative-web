import { useFormik } from 'formik';
import * as Yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      company: '',
      email: '',
      subject: '',
    },

    validationSchema: Yup.object({
      company: Yup.string().required('Campo requerido'),
      email: Yup.string()
        .required('Campo requerido')
        .matches(emailRegex, 'Ingrese un formato válido, por ejemplo email@gmail.com'),
      subject: Yup.string().required('Campo requerido'),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
