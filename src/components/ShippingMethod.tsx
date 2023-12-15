import { ReactHookFormType } from "@/types/ReactHookForm";
import { ShippingOption } from "./shippingMethod/ShippingOption";

export const ShippingMethod = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">03. Métodos de envio</h2>
      {errors.shipping && (
        <p className="text-red-700 text-xs mt-2">
          {errors.shipping.message as string}
        </p>
      )}
      <div className="mt-9">
        <div className="sm:flex sm:justify-between">
          <ShippingOption register={register} errors={errors} value="toGo" />
          <ShippingOption register={register} errors={errors} value="pickUp" />
        </div>
      </div>
    </div>
  );
};
