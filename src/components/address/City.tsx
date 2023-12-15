import { ReactHookFormType } from "@/types/ReactHookForm";

export const City = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.city
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center  `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Cidade
        </legend>
        <input
          type="text"
          className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
          placeholder="Informe sua cidade"
          {...register("city")}
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
