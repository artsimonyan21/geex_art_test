import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC, ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
