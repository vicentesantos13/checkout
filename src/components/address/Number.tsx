import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const Number = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.number
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center  `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Número
        </legend>
        <Textinput register={register} field="number" placeholder="Número" />
      </fieldset>
      {errors.number && (
        <p className="text-red-700 text-xs mt-2">
          {errors.number.message as string}
        </p>
      )}
    </div>
  );
};
