import { Dispatch, FC, SetStateAction } from "react";
import SelectSport from "../SelectSport";
import { TRegisterInfo } from "./RegisterForm";

interface ThirdStepProps {
  setRegisterInfo: Dispatch<SetStateAction<TRegisterInfo | undefined>>;
  nextStep: () => void;
}
const ThirdStep: FC<ThirdStepProps> = ({ setRegisterInfo, nextStep }) => {
  const next = (sports: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setRegisterInfo((prev: any) => ({ ...prev, selectedAthlets: sports }));
    nextStep();
  };

  return (
    <div className="w-full max-w-[766px] bg-white py-8 sm:px-6 px-4 rounded-[24px]">
      <h2 className="text-xl font-semibold text-[#06082C] mb-6">
        Выберите вид спорта
      </h2>
      <SelectSport next={next} />
    </div>
  );
};

export default ThirdStep;
