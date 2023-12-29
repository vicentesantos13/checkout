import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const Name = ({ register, errors }: ReactHookFormType) => {
  return (
    <>
      <fieldset
        className={`border ${
          errors.name
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Nome
        </legend>
        <Textinput
          register={register}
          field="name"
          placeholder="Informe seu nome"
        />
      </fieldset>
      {errors.name && (
        <p className="text-red-700 text-xs mt-2">
          {errors.name.message as string}
        </p>
      )}
    </>
  );
};
