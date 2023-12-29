import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface PaymentForm {
    method: string;
    cardNumber?: string;
    expiration?: string;
    cvv?: string;
}

interface FormValues extends FieldValues {
    payment: PaymentForm;
}

export interface CardInfosType {
    register: UseFormRegister<FormValues | FieldValues>;
    errors: FieldErrors<FormValues>;
}