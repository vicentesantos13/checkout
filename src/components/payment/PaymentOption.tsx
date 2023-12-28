"use client";
import { ReactHookFormType } from "@/types/ReactHookForm";
import Image from "next/image";

type PaymentOptionPros = ReactHookFormType & { value: string };

export const PaymentOption = ({
  register,
  errors,
  value,
}: PaymentOptionPros) => {
  return (
    <div className="border border-gray3D rounded h-[72px] w-full sm:w-[48%] mt-7 sm:mt-0 px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus">
      <div className="flex items-center">
        <Image src="/assets/pix.png" width={24} height={24} alt="PIX" />
        <div className="ml-2 text-white">
          {value === "pix" && <p>Pagamento via PIX</p>}
          {value === "card" && <p>Cartão de crédito</p>}
        </div>
      </div>

      <input
        type="radio"
        className="aspect-square w-8  accent-greenFocus"
        value={value}
        {...register("payment.method")}
        defaultChecked={value === "pix"}
      />
    </div>
  );
};
