import { ReactHookFormType } from "@/types/ReactHookForm"
import { PickUp } from "./shippingMethod/PickUp"
import { ToGo } from "./shippingMethod/ToGo"

export const ShippingMethod = ({ register, errors }: ReactHookFormType)=>{
    return(
        <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">03. Métodos de envio</h2>
      {errors.shipping && (
        <p className="text-red-700 text-xs mt-2">
          {errors.shipping.message as string}
        </p>
      )}
      <div className="mt-9">
       
        <div className="sm:flex sm:justify-between">
          <ToGo register={register} errors={errors}/>
          <PickUp register={register} errors={errors}/>
        </div>
      </div>
      
    </div>
    )
}