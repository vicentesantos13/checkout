import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const Street = ({ register, errors }: ReactHookFormType) => {
  return (
    <div>
      <fieldset
        className={`border ${
          errors.street
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center mt-7 `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Rua
        </legend>
        <Textinput
          register={register}
          field="street"
          placeholder="Informe sua rua"
        />
      </fieldset>
      {errors.street && (
        <p className="text-red-700 text-xs mt-2">
          {errors.street.message as string}
        </p>
      )}
    </div>
  );
};
