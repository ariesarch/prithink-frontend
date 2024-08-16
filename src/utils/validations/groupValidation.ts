import * as yup from 'yup';

export const groupValidationSchema = yup.object().shape({
  group_name: yup.string().required('Group Name is required'),
  time_per_day: yup.number().required('Time Per Day is required'),
  user_id: yup.string().required('User ID is required'),
});
