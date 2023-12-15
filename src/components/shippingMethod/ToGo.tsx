import { ReactHookFormType } from "@/types/ReactHookForm";
import Image from "next/image";

export const ToGo = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="border border-gray3D rounded h-28 w-full sm:w-[48%] px-6 flex justify-between items-center focus-within:border-greenFocus focus-within:bg-greenBgFocus">
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
        <input type="radio" className="aspect-square w-8  accent-greenFocus"  {...register("shipping")} value="toGo"/>
      </div>
    </div>
  );
};
