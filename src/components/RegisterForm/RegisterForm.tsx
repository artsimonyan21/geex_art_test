import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const steps = {
  [0]: FirstStep,
  [1]: SecondStep,
  [2]: ThirdStep,
  [3]: FourthStep,
};

type TUserInfo = {
  image: string;
  name: string;
  surname: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  citizenShip: string;
};

export type TRegisterInfo = {
  userPhone: string;
  kindOfSport: string[];
  selectedAthlets: string[];
  selectedOrganizations: string[];
  userInfo: TUserInfo;
};

const RegisterForm = () => {
  const [step, setStep] = useState<number>(0);
  const [registerInfo, setRegsterInfo] = useState<TRegisterInfo>();

  console.log("registerInfo", registerInfo);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const CurrentStep = steps[step as keyof typeof steps];

  return (
    <CurrentStep
      nextStep={nextStep}
      prevStep={prevStep}
      setRegisterInfo={setRegsterInfo}
      registerValues={registerInfo}
    />
  );
};

export default RegisterForm;
