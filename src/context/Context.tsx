"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type PaymentProviderProps = {
  children: ReactNode;
};
type PaymentContextProps = {
  payment: string;
  setPayment: (value: string) => void;
};
const PaymentContext = createContext<PaymentContextProps>(
  {} as PaymentContextProps
);

export function PaymentProvider({ children }: PaymentProviderProps) {
  const [payment, setPayment] = useState("");

  return (
    <PaymentContext.Provider value={{ payment, setPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);

  return context;
}
