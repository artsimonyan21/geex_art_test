import Logo from "@/assets/icons/smallLogo.svg?react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";

const SecondStep = ({ prevStep }: { prevStep?: () => void }) => {
  const [second, setSeconds] = useState(60);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setSeconds((prev) => {
          if (prev === 1) {
            clearInterval(interval);
          }
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="sm:max-w-[370px] w-full flex flex-col justify-center items-center bg-[#FFFFFF] sm:rounded-xl rounded-t-xl px-6 gap-4 py-8 relative">
      <span className="border-2 border-[#F1F3F7] rounded-xl absolute -top-4 w-14 sm:hidden block"></span>
      <div className="w-fit p-4 rounded-xl bg-[#FF2410]">
        <Logo className="w-8" />
      </div>
      <h2 className="text-[#06082C] font-semibold text-[30px] text-center">
        Подтвердите номер телефона
      </h2>
      <p className="text-sm text-[#9395B8] text-center font-medium">
        Отправим сообщение с 6-ти значным кодом на номер {"+7151548853"}{" "}
        <button
          className="text-xs font-semibold text-[#353754]"
          onClick={prevStep}
        >
          Изменить
        </button>
      </p>
      <div className="w-fit mx-auto my-6 flex flex-col items-center">
        <VerificationInput
          length={6}
          validChars="0-9"
          inputProps={{ inputMode: "numeric" }}
          classNames={{
            container: "mx-auto gap-3 w-fit h-fit",
            character:
              "w-[40px] h-[40px] rounded-[12px] flex justify-center items-center text-[#06082C] text-[12px]",
            characterInactive: "bg-transparent",
          }}
          //   onChange={field.onChange}
          //   value={field.value?.toString()}
        />
      </div>
      <Button
        className="!bg-[#06082C] !text-white w-full max-w-[370px] !rounded-xl"
        type="submit"
      >
        Подтвердить
      </Button>
      <p className="text-sm text-[#353754] font-medium">
        Отправить снова через {second}
      </p>
    </section>
  );
};

export default SecondStep;
