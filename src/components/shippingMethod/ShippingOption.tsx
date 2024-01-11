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
        <div className="border border-neutral-700 rounded h-28  px-6 flex justify-between items-center focus-within:border-emerald-500 focus-within:bg-BgFocus">
          <div className="flex items-center">
            <Image src="/assets/zap.png" width={36} height={36} alt="Raio" />
            <div className="ml-2">
              <p className="text-white">
                bsete<span className="italic font-semibold">EXPRESS</span>
              </p>
              <p className="text-xs text-zinc-500">entrega em 20 segundos.</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-zinc-500 font-semibold mr-2 ">R$ 7,00</p>
            <input
              defaultChecked
              type="radio"
              className="aspect-square w-8  accent-emerald-500"
              {...register("shipping")}
              value="toGo"
            />
          </div>
        </div>
      )}
      {value === "pickUp" && (
        <div className="border border-neutral-700 rounded h-28  px-6 flex justify-between items-center focus-within:border-emerald-500 focus-within:bg-BgFocus mt-7 sm:mt-0">
          <div className="flex items-center">
            <Image src="/assets/bag.png" width={36} height={36} alt="Raio" />
            <div className="ml-2 text-white">
              Retirar no <br />
              restaurante
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-zinc-500 font-semibold mr-2 ">Grátis</p>
            <input
              type="radio"
              className="aspect-square w-8  accent-emerald-500"
              {...register("shipping")}
              value="pickUp"
            />
          </div>
        </div>
      )}
    </div>
  );
};
