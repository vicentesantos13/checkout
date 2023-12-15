import { ReactHookFormType } from "@/types/ReactHookForm";
import { Email } from "./personalData/Email";
import { Name } from "./personalData/Name";
import { Phone } from "./personalData/Phone";



export const PersonalData = ({register,errors}:ReactHookFormType) => {
  return (
    <div className="flex flex-col mt-9">
      <h2 className="text-white text-xl">01. Dados pessoais</h2>
      <div className="mt-9">
        <Name register={register} errors={errors} />
        <div className="sm:flex sm:justify-between">
          <Email register={register} errors={errors} />
          <Phone register={register} errors={errors} />
        </div>
      </div>
    </div>
  );
};
