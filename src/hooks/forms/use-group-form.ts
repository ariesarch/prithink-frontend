import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { GroupFormValues } from '@/interfaces/group.interface';
import { groupValidationSchema } from '@/utils/validations/groupValidation';
export const useGroupForm = (): UseFormReturn<GroupFormValues> => {
  const formMethods = useForm<GroupFormValues>({
    resolver: yupResolver(groupValidationSchema),
    defaultValues: {
      user_id:'',
      group_name: '',
      time_per_day: 1,
    },
    mode: 'onChange',
  });
  return formMethods;
};
