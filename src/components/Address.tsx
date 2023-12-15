import { CEP } from "./address/CEP";
import { City } from "./address/City";
import { Complement } from "./address/Complement";
import { Neighborhood } from "./address/Neighborhood";
import { Number } from "./address/Number";
import { State } from "./address/State";
import { Street } from "./address/Street";

import { ReactHookFormType } from "@/types/ReactHookForm";

export const Address = ({ register, errors }: ReactHookFormType) => {
  return (
    <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">02. Endereço para envio</h2>
      <div className="mt-9">
        <div className="">
          <div className="sm:flex sm:justify-between">
            <CEP register={register} errors={errors} />
            <State register={register} errors={errors} />
          </div>
          <div className="sm:flex sm:justify-between mt-7">
            <City register={register} errors={errors} />
            <Neighborhood register={register} errors={errors}/>
          </div>
          <Street register={register} errors={errors}/>
          <div className="sm:flex sm:justify-between mt-7">
            <Number register={register} errors={errors}/>
            <Complement register={register} errors={errors}/>
          </div>
        </div>
      </div>
    </div>
  );
};
