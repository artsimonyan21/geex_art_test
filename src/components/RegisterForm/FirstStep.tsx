import Logo from "@/assets/icons/smallLogo.svg?react";
import { GlobalContext } from "@/context/GlobalContext";
import Button from "@mui/material/Button";
import { MuiTelInput } from "mui-tel-input";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TRegisterInfo } from "./RegisterForm";

interface FirstStepProps {
  nextStep: () => void;
  setRegisterInfo: Dispatch<SetStateAction<TRegisterInfo | undefined>>;
}

const FirstStep: FC<FirstStepProps> = ({ nextStep, setRegisterInfo }) => {
  const { handleModalOpen } = useContext(GlobalContext);

  const [value, setValue] = useState("");
  const { handleSubmit } = useForm();

  const handleChange = (value: string) => {
    setValue(value);
  };

  const onSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setRegisterInfo((prev: any) => ({ ...prev, userPhone: value }));
    nextStep();
  };
  return (
    <section className="sm:max-w-[370px] w-full flex flex-col justify-center items-center bg-[#FFFFFF] sm:rounded-xl rounded-t-xl px-6 gap-4 py-8 relative">
      <span className="border-2 border-[#F1F3F7] rounded-xl absolute -top-4 w-14 sm:hidden block"></span>
      <div className="w-fit p-4 rounded-xl bg-[#FF2410]">
        <Logo className="w-8" />
      </div>
      <h2 className="text-[#06082C] font-semibold text-[30px]">Регистрация</h2>
      <p className="text-sm text-[#9395B8] text-center font-medium">
        Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <span className="text-[#7B7EA5] text-xs">Номер телефона</span>
          <MuiTelInput
            defaultCountry="RU"
            onChange={handleChange}
            value={value}
            className="w-full bg-[#F1F3F7]"
          />
        </div>
        <Button
          className="!bg-[#06082C] !text-white w-full max-w-[370px] !rounded-xl"
          type="submit"
        >
          Получить код
        </Button>
      </form>
      <p className="text-sm font-medium text-[#9395B8] mt-6">
        Уже зарегистированы?
      </p>
      <Button
        className="!bg-[#F1F3F7] !text-[#06082C] w-full max-w-[370px] !rounded-xl !font-medium"
        onClick={() => handleModalOpen("login")}
      >
        Войти
      </Button>
    </section>
  );
};

export default FirstStep;
