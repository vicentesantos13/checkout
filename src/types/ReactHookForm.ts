import { UseFormRegister, UseFormWatch, FieldValues, FieldErrors } from "react-hook-form";

export type ReactHookFormType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch?:UseFormWatch<FieldValues>
}