import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValues } from '@/interfaces/auth.interface';
import { loginValidationSchema } from '@/utils/validations/authValidation';

export const useLoginForm = (): UseFormReturn<LoginFormValues> => {
  const formMethods = useForm<LoginFormValues>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      user_name: '',
      password: '',
    },
    mode: 'onChange',
  });
  return formMethods;
};
