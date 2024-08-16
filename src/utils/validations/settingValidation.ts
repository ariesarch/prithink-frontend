import * as yup from 'yup';

export const settingValidationSchema = yup.object().shape({
  group_id: yup.string().required('URL is required'),
  URL: yup.string().required('URL is required'),
  owned_by_user: yup.bool().required('Owned by user is required'),
});
