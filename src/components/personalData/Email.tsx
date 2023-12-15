import { ReactHookFormType } from "@/types/ReactHookForm";

export const Email = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="w-full sm:w-[48%]">
      <fieldset
        className={`border ${
          errors.email
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
        } rounded h-[72px] flex items-center mt-7  `}
      >
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          E-mail
        </legend>
        <input
          type="text"
          className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
          placeholder="exemplo@exemplo.com"
          {...register("email")}
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
