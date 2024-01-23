import { useContactForm } from "@/hooks/useContactForm";
import { useCustomToast } from "./useCustomToast";

export const useSubmitContactForm = () => {
  const { handleSubmit, register, errors, isSubmitting, reset } = useContactForm();
  const showToast = useCustomToast();

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
        showToast("送信に失敗しました", "お手数ですが、時間をおいて再度お試しください。", "error");
      } else {
        reset();
        showToast("お問い合わせありがとうございます", "2営業日以内にメールにてご連絡させていただきます。", "success");
      }
    } catch (error) {
      console.log('error');
      showToast("送信に失敗しました", "お手数ですが、時間をおいて再度お試しください。", "error");
    }
  };

  return { handleSubmit: handleSubmit(onSubmit), register, errors, isSubmitting };
};