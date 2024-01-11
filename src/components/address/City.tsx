import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const City = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.city
            ? "border-red-700 focus-within:border-red-700"
            : "border-neutral-700 focus-within:border-emerald-500 "
        } rounded h-[72px] flex items-center  `}
      >
        <legend className="text-xs sm:text-base text-zinc-500 ml-5 px-1">
          Cidade
        </legend>
        <Textinput
          register={register}
          field="city"
          placeholder="Informe sua cidade"
        />
      </fieldset>
      {errors.city && (
        <p className="text-red-700 text-xs mt-2">
          {errors.city.message as string}
        </p>
      )}
    </div>
  );
};
