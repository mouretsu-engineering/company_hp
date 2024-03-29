import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  lastName: yup.string().required('※この項目は入力必須項目です。'),
  firstName: yup.string().required('※この項目は入力必須項目です。'),
  company: yup.string(),
  department: yup.string(),
  post: yup.string(),
  email: yup.string().required('※この項目は入力必須項目です。').email('有効なメールアドレスを入力してください。'),
  tell: yup.string().required('※この項目は入力必須項目です。').matches(/^[0-9]+$/, '電話番号は数字のみでなければなりません。'),
  purpose: yup.string().required('※この項目は入力必須項目です。'),
  detail: yup.string().required('※この項目は入力必須項目です。'),
});

export const useContactForm = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  return { handleSubmit, register, errors, isSubmitting, reset };
};