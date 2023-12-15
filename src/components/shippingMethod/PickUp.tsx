import { ReactHookFormType } from "@/types/ReactHookForm";
import Image from "next/image";

export const PickUp = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="border border-gray3D rounded h-28 w-full sm:w-[48%] mt-7 sm:mt-0 px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus">
      <div className="flex items-center">
        <Image src="/assets/bag.png" width={36} height={36} alt="Raio" />
        <div className="ml-2 text-white">
          Retirar no <br/>restaurante
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-xs text-gray7F font-semibold mr-2 ">Grátis</p>
        <input type="radio" className="aspect-square w-8  accent-greenFocus"  {...register("shipping")} value="pickUp"/>
      </div>
    </div>
  );
};
