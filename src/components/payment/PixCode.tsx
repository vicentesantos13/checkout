export const PixCode = () => {
    return (
      <fieldset className="border border-gray3D rounded h-[72px] mt-7 flex items-center focus-within:border-greenFocus">
        <legend className="text-xs sm:text-base text-gray7F ml-5 px-1">
          Código PIX
        </legend>
        <input
          type="text"
          className="bg-inherit text-white placeholder:text-gray7F outline-none ml-6 w-11/12 h-full"
          value="00020126570014br.gov.bcb.pix0111811177100250220"
          disabled
        />
      </fieldset>
    );
  };
  