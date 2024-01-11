"use client";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { PersonalData } from "./PersonalData";
import { ShippingMethod } from "./ShippingMethod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CheckoutFormSchema from "@/schema/CheckoutFormSchema";

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const handleSendCheckout = () => {
    alert("Formulário enviado!");
    reset();
  };

  return (
    <div className="px-3 max-w-[800px] m-auto flex flex-col">
      <div className="py-6 md:py-10 border-b border-b-neutral-700 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-white text-2xl md:text-3xl">Checkout (3 itens)</h2>
        <div className="text-white mt-1 md:text-2xl">
          <span className="text-zinc-500">Total:</span> R$ 123,00
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSendCheckout)}>
        <PersonalData register={register} errors={errors} />
        <Address register={register} errors={errors} />
        <ShippingMethod register={register} errors={errors} />
        <Payment register={register} errors={errors} watch={watch} />
        <button className="h-[72px] mt-10 sm:mt-[72px] w-full bg-emerald-500 text-white rounded text-xl">
          Continuar
        </button>
      </form>
    </div>
  );
};
