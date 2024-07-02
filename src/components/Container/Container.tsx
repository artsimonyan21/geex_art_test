import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="xl:px-[140px] lg:px-20 md:px-16 sm:px-10 px-4">
      {children}
    </div>
  );
};

export default Container;
