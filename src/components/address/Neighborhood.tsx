import { ReactHookFormType } from "@/types/ReactHookForm";

export const Neighborhood = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.neighborhood
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1 ">
          Bairro
        </legend>
        <input
          type="text"
          className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full  "
          placeholder="Informe seu bairro"
          {...register("neighborhood")}
        />
      </fieldset>
      {errors.neighborhood && (
        <p className="text-red-700 text-xs mt-2">
          {errors.neighborhood.message as string}
        </p>
      )}
    </div>
  );
};
