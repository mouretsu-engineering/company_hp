// src/hooks/useSubmitForm.ts
import { useContactForm } from "@/hook/useContactForm";

export const useSubmitContactForm = () => {
  const { handleSubmit, register, errors, isSubmitting, reset } = useContactForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch('/api/sendSlackMsg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (!res.ok) {
        throw new Error('Error sending message');
      }
      reset();

    } catch (error) {
      console.log('error');
    } finally {
      reset();
    }
  };

  return { handleSubmit: handleSubmit(onSubmit), register, errors, isSubmitting };
};