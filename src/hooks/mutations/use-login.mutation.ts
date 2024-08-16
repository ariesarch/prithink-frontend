import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";
import { LoginFormValues } from "@/interfaces/auth.interface";
export const useLoginMutation = () => {
  return useMutation({
    mutationFn:(input: LoginFormValues) => AuthService.login(input)
  });
};
