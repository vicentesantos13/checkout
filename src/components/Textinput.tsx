import { TextinputType } from "@/types/Textinput";

export const Textinput = ({ register, field, placeholder }: TextinputType) => {
  return (
    <input
      type="text"
      className="bg-inherit text-white placeholder:text-zinc-500 outline-none ml-6 w-full h-full"
      placeholder={`${placeholder}`}
      {...register(`${field}`)}
    />
  );
};
