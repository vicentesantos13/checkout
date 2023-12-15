import { ReactHookFormType } from "@/types/ReactHookForm";


export const CardInfos = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="sm:flex sm:justify-between mt-7">
      <div className="w-full sm:w-[48%]">
        <fieldset
          className={`border ${errors.payment?.cardNumber
            ? "border-red-700 focus-within:border-red-700"
            : "border-gray3D focus-within:border-greenFocus "
            } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
        >
          <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
            Número do cartão
          </legend>
          <input
            type="text"
            className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
            placeholder="Número do cartão"
            {...register("payment.cardNumber")}
          />
        </fieldset>
        {errors.payment?.cardNumber && (
          <p className="text-red-700 text-xs mt-2">
            {errors.payment.cardNumber.message as string}
          </p>
        )}
      </div>
      <div className="flex justify-between mt-7 sm:mt-0 sm:w-[48%]">
        <div className=" w-[48%]">
          <fieldset
            className={`border ${errors.payment?.expiration
              ? "border-red-700 focus-within:border-red-700"
              : "border-gray3D focus-within:border-greenFocus "
              } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
          >
            <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
              Validade
            </legend>
            <input
              type="text"
              className="bg-inherit text-white  placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
              placeholder="MM/AA"
              {...register("payment.expiration")}
            />
          </fieldset>
          {errors.payment?.expiration && (
            <p className="text-red-700 text-xs mt-2">
              {errors.payment.expiration.message as string}
            </p>
          )}
        </div>
        <div className=" w-[48%]">
          <fieldset
            className={`border ${errors.payment?.cvv
              ? "border-red-700 focus-within:border-red-700"
              : "border-gray3D focus-within:border-greenFocus "
              } rounded h-[72px] flex items-center mt-7 sm:mt-0  `}
          >
            <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
              CVV
            </legend>
            <input
              type="text"
              className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
              {...register("payment.cvv")}
            />
          </fieldset>
          {errors.payment?.cvv && (
            <p className="text-red-700 text-xs mt-2">
              {errors.payment.cvv.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
