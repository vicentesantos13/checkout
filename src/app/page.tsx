import { Checkout } from "@/components/Checkout";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <main className="bg-black14 font-poppins pb-10">
      <Header/>
      <Checkout/>
    </main>
  )
}
