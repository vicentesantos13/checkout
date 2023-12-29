import { UseFormRegister, UseFormWatch, FieldValues, FieldErrors } from "react-hook-form";

export type TextinputType = {
  register: UseFormRegister<FieldValues>;
  field:string;
  placeholder:string;
}
