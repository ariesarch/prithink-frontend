import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  user_name: yup.string().required('User Name is required'),
  password: yup.string().required('Password is required'),
});
