import { TextinputType } from "@/types/Textinput"
import { FieldValues, UseFormRegister } from "react-hook-form"

export const Textinput = ({register,field,placeholder}:TextinputType)=>{
    return(
        <input type="text"
        className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
        placeholder={`${placeholder}`}
        {...register(`${field}`)}/>
    )
}