import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const steps = {
  [0]: FirstStep,
  [1]: SecondStep,
};

const LoginForm = () => {
  const [step, setStep] = useState<number>(0);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const CurrentStep = steps[step as keyof typeof steps];

  return <CurrentStep nextStep={nextStep} prevStep={prevStep} />;
};

export default LoginForm;
