import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ApiKeyFormValues } from '@/interfaces/api_key.interface';
import { apiKeyValidationSchema } from '@/utils/validations/apiKeyValidation';
export const useApiKeyForm = (): UseFormReturn<ApiKeyFormValues> => {
  const formMethods = useForm<ApiKeyFormValues>({
    resolver: yupResolver(apiKeyValidationSchema),
    defaultValues: {
      site_id:'',
      company_id:'',
      api_key: ''
    },
    mode: 'onChange',
  });
  return formMethods;
};
