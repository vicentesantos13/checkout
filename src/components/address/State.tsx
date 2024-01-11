import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const State = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.state
            ? "border-red-700 focus-within:border-red-700"
            : "border-neutral-700 focus-within:border-emerald-500 "
        } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
      >
        <legend className="text-xs sm:text-base text-zinc-500 ml-5 px-1">
          Estado
        </legend>
        <Textinput
          register={register}
          field="state"
          placeholder="Informe seu Estado (Ex.: PB)"
        />
      </fieldset>
      {errors.state && (
        <p className="text-red-700 text-xs mt-2">
          {errors.state.message as string}
        </p>
      )}
    </div>
  );
};
