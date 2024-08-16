// import { useForm } from 'react-hook-form';
// import { userValidationSchema } from '@/utils/validations/userValidation';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { UserFormValues } from '@/interfaces/user.interface';

// export const useUserForm = () => {
//   return useForm<UserFormValues>({
//     resolver: yupResolver(userValidationSchema),
//     defaultValues: {
//       user_name: '',
//       password: '',
//       role_id: '',
//     },
//     mode: 'onChange',
//   });
// };

import { useForm, UseFormReturn } from 'react-hook-form';
import { userValidationSchema } from '@/utils/validations/userValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormValues } from '@/interfaces/user.interface';

export const useUserForm = (): UseFormReturn<UserFormValues> => {
  const formMethods = useForm<UserFormValues>({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      user_name: '',
      password: '',
      role_id: '',
    },
    mode: 'onChange',
  });

  return formMethods;
};
