import * as yup from 'yup';

export const apiKeyValidationSchema = yup.object().shape({
  site_id: yup.string().required('Site is required'),
  company_id: yup.string().required('Company is required'),
  api_key: yup.string().required('API Key is required'),
});
