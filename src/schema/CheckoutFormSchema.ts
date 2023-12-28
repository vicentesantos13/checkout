import { z } from "zod";



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
      { message: "Informe um NÚMERO maior que 0." }
    ),
    complement: z.string().optional(),
    shipping: z.enum(["toGo", "pickUp"], {
      invalid_type_error: "Escolha uma opção de envio.",
    }),
    payment: z
      .object({
        method: z.literal("pix", { invalid_type_error: "Informe uma opção de pagamento." }),
      })
      .or(
        z.object({
          method: z.literal("card", { invalid_type_error:"Informe uma opção de pagamento." }),
          cardNumber: z.string().refine((value) => /^\d{16}$/i.test(value), {
            message: "Informe um número de cartão válido (16 dígitos)",
          }),
          expiration: z.string().refine(
            (value) => {
              const [rawMonth, rawYear] = value.split("/");
              if (rawMonth && rawYear) {
                const month = parseInt(rawMonth, 10);
                const year = parseInt(rawYear, 10);

                return (
                  !isNaN(month) &&
                  !isNaN(year) &&
                  month >= 1 &&
                  month <= 12 &&
                  year >= 23 &&
                  year <= 99
                );
              }
              return false;
            },
            { message: "Informe uma data válida" }
          ),
          cvv: z.string().refine((value) => /^\d{3}$/i.test(value), {
            message: "Digite um CVV válido (3 dígitos)",
          }),
        })
      ),
  });

  export default CheckoutFormSchema