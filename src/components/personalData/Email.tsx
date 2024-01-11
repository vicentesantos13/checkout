import { ReactHookFormType } from "@/types/ReactHookForm";
import { Textinput } from "../Textinput";

export const Email = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.email
            ? "border-red-700 focus-within:border-red-700"
            : "border-neutral-700 focus-within:border-emerald-500 "
        } rounded h-[72px] flex items-center mt-7  `}
      >
        <legend className="text-xs sm:text-base text-zinc-500 ml-5 px-1">
          E-mail
        </legend>
        <Textinput
          register={register}
          field="email"
          placeholder="exemplo@exemplo.com"
        />
      </fieldset>
      {errors.email && (
        <p className="text-red-700 text-xs mt-2">
          {errors.email.message as string}
        </p>
      )}
    </div>
  );
};
