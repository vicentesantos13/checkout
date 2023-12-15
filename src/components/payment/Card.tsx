"use client";
import { usePayment } from "@/context/Context";
import { ReactHookFormType } from "@/types/ReactHookForm";
import Image from "next/image";

export const Card = ({ register, errors }: ReactHookFormType) => {
  const { setPayment } = usePayment();

  return (
    <div className="border border-gray3D rounded h-[72px] w-full sm:w-[48%] mt-7 sm:mt-0 px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus">
      <div className="flex items-center">
        <Image src="/assets/card.png" width={24} height={24} alt="PIX" />
        <div className="ml-2 text-white">Cartão de crédito</div>
      </div>
      <input
        type="radio"
        className="aspect-square w-8  accent-greenFocus"
        value="card"
        {...register("payment")}
      />
    </div>
  );
};