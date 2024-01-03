"use client";
import { ReactHookFormType } from "@/types/ReactHookForm";
import Image from "next/image";

type ShippingOptionProps = ReactHookFormType & { value: string };

export const ShippingOption = ({
  register,
  errors,
  value,
}: ShippingOptionProps) => {
  return (
    <div className="w-full sm:w-[48%] ">
      {value === "toGo" && (
        <div className="border border-gray3D rounded h-28  px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus">
          <div className="flex items-center">
            <Image src="/assets/zap.png" width={36} height={36} alt="Raio" />
            <div className="ml-2">
              <p className="text-white">
                bsete<span className="italic font-semibold">EXPRESS</span>
              </p>
              <p className="text-xs text-gray7F">entrega em 20 segundos.</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-gray7F font-semibold mr-2 ">R$ 7,00</p>
            <input
              defaultChecked
              type="radio"
              className="aspect-square w-8  accent-greenFocus"
              {...register("shipping")}
              value="toGo"
            />
          </div>
        </div>
      )}
      {value === "pickUp" && (
        <div className="border border-gray3D rounded h-28  px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus mt-7 sm:mt-0">
          <div className="flex items-center">
            <Image src="/assets/bag.png" width={36} height={36} alt="Raio" />
            <div className="ml-2 text-white">
              Retirar no <br />
              restaurante
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-gray7F font-semibold mr-2 ">Grátis</p>
            <input
              type="radio"
              className="aspect-square w-8  accent-greenFocus"
              {...register("shipping")}
              value="pickUp"
            />
          </div>
        </div>
      )}
    </div>
  );
};
