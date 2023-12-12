import { useFormik } from 'formik';
import * as Yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required('Campo requerido')
        .matches(emailRegex, 'Ingrese un formato válido, por ejemplo email@gmail.com'),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
