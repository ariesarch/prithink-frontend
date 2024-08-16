import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SettingFormValues } from '@/interfaces/setting.interface';
import { settingValidationSchema } from '@/utils/validations/settingValidation';

export const useSettingForm = (): UseFormReturn<SettingFormValues> => {
  const formMethods = useForm<SettingFormValues>({
    resolver: yupResolver(settingValidationSchema),
    defaultValues: {
      group_id: '',
      URL: '',
      owned_by_user: false,
    },
    mode: 'onChange',
  });
  return formMethods;
};
