import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-gray1C py-12">
      <div className="max-w-7xl m-auto px-3 flex justify-between items-center">
        <div className="w-1/2 sm:w-7/12 lg:w-1/2 flex justify-between items-center">
          <h1 className="text-white text-2xl sm:text-base md:text-xl lg:text-2xl font-light">
            bsete<span className="font-bold">burguer</span>
          </h1>
          <nav className="w-3/5 sm:w-8/12 lg:w-3/5 hidden sm:flex">
            <ul className="w-full flex justify-between text-gray9C sm:text-sm md:text-base">
              <li className="cursor-pointer">Novidades</li>
              <li className="cursor-pointer">Hambúrguer</li>
              <li className="cursor-pointer">Promoções</li>
            </ul>
          </nav>
        </div>
        <div className="w-1/6 xl:w-[14%]  hidden sm:flex justify-between">
          <div className=" aspect-square w-9 md:w-10 lg:w-12 bg-gray29 rounded flex justify-center items-center cursor-pointer">
            <Image
              src="/assets/search.png"
              width={24}
              height={24}
              alt="Procurar"
            />
          </div>
          <div className=" aspect-square w-9 md:w-10 lg:w-12 bg-gray29 rounded flex justify-center items-center cursor-pointer">
            <Image
              src="/assets/heart.png"
              width={24}
              height={24}
              alt="Gostei"
            />
          </div>
          <div className=" aspect-square w-9 md:w-10 lg:w-12 bg-gray29 rounded flex justify-center items-center cursor-pointer">
            <Image src="/assets/bag.png" width={24} height={24} alt="Sacola" />
          </div>
        </div>
        <div className="cursor-pointer sm:hidden">
          <Image src="/assets/menu.png" width={24} height={24} alt="Menu" />
        </div>
      </div>
    </div>
  );
};
