import UserIcon from "@/assets/icons/userIcon.svg?react";
import Logo from "@/assets/react.svg?react";
import { useContext } from "react";
import Container from "../Container";
import { headerLinks } from "./links";
import LoginForm from "../LoginForm";

import Modal from "@mui/material/Modal";
import { GlobalContext } from "@/context/GlobalContext";
import { Box } from "@mui/material";
import RegisterForm from "../RegisterForm";

const Header = () => {
  const { modalType, handleModalOpen, handleModalClose } =
    useContext(GlobalContext);

  return (
    <>
      <Modal
        open={modalType === "login"}
        onClose={handleModalClose}
        className="w-screen h-screen absolute top-0 left-0  bg-black/60 flex justify-center sm:items-center items-end"
      >
        <Box>
          <LoginForm />
        </Box>
      </Modal>
      <Modal
        open={modalType === "register"}
        onClose={handleModalClose}
        className="w-screen h-screen absolute top-0 left-0  bg-black/60 flex justify-center sm:items-center items-end"
      >
        <Box>
          <RegisterForm />
        </Box>
      </Modal>

      <header className="w-full">
        <Container>
          <div className="flex justify-between py-4 items-center">
            <Logo className="w-32 h-8 flex-shrink-0" />
            <ul className="w-fit flex gap-6">
              {headerLinks.map((item, idx) => (
                <li key={idx} className="flex gap-1">
                  <item.icon className="w-6" />
                  <a href="#">{item.name}</a>
                </li>
              ))}
            </ul>
            <button
              className="p-3 bg-[#F1F3F7] rounded-xl"
              onClick={() => handleModalOpen("login")}
            >
              <UserIcon className="w-4" />
            </button>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
