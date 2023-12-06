export const Checkout = () => {
  return (
    <div className="px-3 max-w-[800px] m-auto flex flex-col">
      <div className="py-6 md:py-10 border-b border-b-gray3D flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-white text-2xl md:text-3xl">Checkout (3 itens)</h2>
        <div className="text-white mt-1 md:text-2xl">
          <span className="text-gray7F">Total:</span> R$ 123,00
        </div>
      </div>
      <form>
        <div className="flex flex-col mt-9">
          <h2 className="text-white text-xl">01. Dados pessoais</h2>
          <div className="mt-9">
            <fieldset className="border border-gray3D rounded h-[72px] flex items-center">
              <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
                Nome
              </legend>
              <input
                type="text"
                className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12"
                placeholder="Informe seu nome"
              />
            </fieldset>
            <div className="flex flex-col sm:flex-row justify-between">
              <fieldset className="border border-gray3D rounded h-[72px] mt-7 w-full sm:w-[48%] flex items-center">
                <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
                  E-mail
                </legend>
                <input
                  type="text"
                  className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12"
                  placeholder="exemplo@exemplo.com"
                />
              </fieldset>
              <fieldset className="border border-gray3D rounded h-[72px] mt-7 w-full sm:w-[48%] flex items-center">
                <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
                  Telefone
                </legend>
                <input
                  type="text"
                  className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12"
                  placeholder="Informe seu telefone"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
