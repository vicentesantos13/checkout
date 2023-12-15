"use client";
import { CardInfos } from "./payment/CardInfos";
import { ReactHookFormType } from "@/types/ReactHookForm";
import { UseFormWatch, FieldValues } from "react-hook-form";
import { PaymentOption } from "./payment/PaymentOption";

type PaymentProps = ReactHookFormType & { watch: UseFormWatch<FieldValues> };

export const Payment = ({ register, errors, watch }: PaymentProps) => {
  const watchPayment = watch("payment.method");

  return (
    <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">04. Forma de pagamento</h2>
      <div className="mt-9">
        <div className="sm:flex sm:justify-between">
          <PaymentOption register={register} errors={errors} value={"pix"} />
          <PaymentOption register={register} errors={errors} value={"card"} />
        </div>
        {watchPayment === "card" && (
          <CardInfos register={register} errors={errors} />
        )}
      </div>
    </div>
  );
};
