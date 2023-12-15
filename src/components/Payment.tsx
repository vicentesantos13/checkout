"use client";
import { PaymentProvider, usePayment } from "@/context/Context";
import { Card } from "./payment/Card";
import { Pix } from "./payment/Pix";
import { useEffect } from "react";
import { PixCode } from "./payment/PixCode";
import { CardInfos } from "./payment/CardInfos";
import { ReactHookFormType } from "@/types/ReactHookForm";
import {  UseFormWatch, FieldValues } from "react-hook-form";


type PaymentProps = ReactHookFormType & { watch:UseFormWatch<FieldValues>}

export const Payment = ({ register, errors, watch}: PaymentProps ) => {
  const watchPayment = watch('payment')
  

  return (
    <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">04. Forma de pagamento</h2>
      {errors.payment && (
        <p className="text-red-700 text-xs mt-2">
          {errors.payment.message as string}
        </p>
      )}
      <div className="mt-9">
        <div className="sm:flex sm:justify-between">
          <Pix register={register} errors={errors}/>
          <Card register={register} errors={errors}/>
        </div>
        {watchPayment === "pix" && <PixCode/>}
        {watchPayment === "card" && <CardInfos register={register} errors={errors}/>}
      </div>
    </div>
  );
};
