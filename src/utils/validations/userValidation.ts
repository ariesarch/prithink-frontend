import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  user_name: yup.string().required('User Name is required'),
  password: yup.string().required('Password is required'),
  role_id: yup.string().required('Role is required'),
  // own_by_user: yup.bool().required('Owner is required'),
});
