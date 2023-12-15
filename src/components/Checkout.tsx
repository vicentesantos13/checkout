"use client";
import { PaymentProvider } from "@/context/Context";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { PersonalData } from "./PersonalData";
import { ShippingMethod } from "./ShippingMethod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Checkout = () => {
  const CheckoutFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
      .max(30, { message: "O nome deve ter no máximo 30 caracteres." }),
    email: z.string().email({ message: "Informe um e-mail válido" }),
    phone: z.string().refine((value) => /^\d{11}$/i.test(value), {
      message: "Digite um número de telefone válido (11 dígitos)",
    }),
    cep: z.string().refine((value) => /^\d{8}$/i.test(value), {
      message: "Digite um número de CEP válido (8 dígitos)",
    }),
    state: z
      .string()
      .refine(
        (value) =>
          [
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO",
            "DF",
          ].includes(value.toUpperCase()),
        { message: "Informe um estado válido (Ex.: PB)" }
      ),
    city: z
      .string()
      .min(2, {
        message: "O nome da cidade deve ter pelo menos 2 caracteres.",
      })
      .max(30, {
        message: "O nome da cidade deve ter no máximo 30 caracteres.",
      }),
    neighborhood: z
      .string()
      .min(2, {
        message: "O nome do bairro deve ter pelo menos 2 caracteres.",
      })
      .max(30, {
        message: "O nome do bairro deve ter no máximo 30 caracteres.",
      }),
    street: z
      .string()
      .min(2, {
        message: "O nome da rua deve ter pelo menos 2 caracteres.",
      })
      .max(30, {
        message: "O nome da rua deve ter no máximo 30 caracteres.",
      }),
    number: z.string().refine(
      (value) => {
        const numericValue = parseInt(value, 10);
        return !isNaN(numericValue) && numericValue >= 1;
      },
      { message: "Informe um NÚMERO maior de 0." }
    ),
    complement: z.string().optional(),
    shipping: z
      .enum(["toGo", "pickUp"], {
        invalid_type_error: "Escolha uma opção de envio.",
      })
      .default("toGo"),
    payment: z.enum(["pix", "card"], {
      invalid_type_error: "Escolha uma opção de pagamento.",
    }),
    // cardNumber: z.string(),
    // expiration: z.string().refine(
    //   (value) => {
    //     const [rawMonth, rawYear] = value.split("/");
    //     if (rawMonth && rawYear) {
    //       const month = parseInt(rawMonth, 10);
    //       const year = parseInt(rawYear, 10);

    //       return (
    //         !isNaN(month) &&
    //         !isNaN(year) &&
    //         month >= 1 &&
    //         month <= 12 &&
    //         year >= 23 &&
    //         year <= 99
    //       );
    //     }
    //     return false;
    //   },
    //   { message: "Informe uma data válida" }
    // ),
    // cvv: z.string().refine((value) => /^\d{3}$/i.test(value), {
    //   message: "Digite um CVV válido (3 dígitos)",
    // }),
  });

  const CardSchema = z.object({
    cardNumber: z.string().refine((value) => /^\d{16}$/i.test(value), {
      message: "Digite um cartão válido (16 dígitos)",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const handleSendCheckout = () => {
    console.log("Mensagem enviada");
  };

  return (
    <div className="px-3 max-w-[800px] m-auto flex flex-col">
      <div className="py-6 md:py-10 border-b border-b-gray3D flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-white text-2xl md:text-3xl">Checkout (3 itens)</h2>
        <div className="text-white mt-1 md:text-2xl">
          <span className="text-gray7F">Total:</span> R$ 123,00
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSendCheckout)}>
        <PersonalData register={register} errors={errors} />
        <Address register={register} errors={errors} />
        <ShippingMethod register={register} errors={errors} />
        <Payment register={register} errors={errors} watch={watch} />
        <button className="h-[72px] mt-10 sm:mt-[72px] w-full bg-greenFocus text-white rounded text-xl">
          Continuar
        </button>
      </form>
    </div>
  );
};
