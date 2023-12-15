import { ReactHookFormType } from "@/types/ReactHookForm";

export const Phone = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
    <fieldset className={`border ${
      errors.phone
        ? "border-red-700 focus-within:border-red-700"
        : "border-gray3D focus-within:border-greenFocus "
    } rounded h-[72px] flex items-center mt-7  `}>
      <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
        Telefone
      </legend>
      <input
        type="tel"
        className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
        placeholder="Informe seu telefone"
        {...register('phone')}
      />
    </fieldset>
    {errors.phone && (
        <p className="text-red-700 text-xs mt-2">
          {errors.phone.message as string}
        </p>
      )}
    </div>
  );
};
