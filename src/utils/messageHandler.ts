
import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";


export const defaultToastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  // hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // progress: undefined,
  theme: "colored",
  transition: Slide,
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const handleMessage = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {},
): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case "success":
      console.log("ShowToast", content);
      return toast.success(content, optionsToApply);
    case "error":
      return toast.error(content, optionsToApply);
    case "info":
      return toast.info(content, optionsToApply);
    case "warning":
      return toast.warn(content, optionsToApply);
    case "default":
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};
export const handleError = <TFormValues>(
  error: any,
  setError?: (name: keyof TFormValues, error: { type: string; message: string }) => void,
  setGlobalError?: (message: string) => void
) => {
  if (error && setError && error.response?.data && typeof error.response.data.errors == 'object') {
    const errorMessages = error.response.data.errors;
    for (const [field, messages] of Object.entries(errorMessages)) {
      if (Array.isArray(messages)) {
        setError(field as keyof TFormValues, {
          type: 'manual',
          message: messages[0] as string,
        });
      }
    }
    return;
  }
  if (error && error.response?.data && typeof error.response.data.errors === 'string') {
    handleMessage("error", error.response.data.errors)
  }
} 
