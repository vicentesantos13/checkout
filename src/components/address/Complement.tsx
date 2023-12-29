import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const Complement = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.complement
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Complemento
        </legend>
        <Textinput
          register={register}
          field="complement"
          placeholder="Complemento"
        />
      </fieldset>
      {errors.complement && (
        <p className="text-red-700 text-xs mt-2">
          {errors.complement.message as string}
        </p>
      )}
    </div>
  );
};
