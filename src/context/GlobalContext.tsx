import { FC, ReactNode, createContext, useMemo, useState } from "react";

type ModalType = "login" | "register";

type GlobalContextValue = {
  modalType: ModalType | undefined;
  handleModalOpen: (type: ModalType) => void;
  handleModalClose: () => void;
};

const initialValue: GlobalContextValue = {
  modalType: undefined,
  handleModalOpen: () => {},
  handleModalClose: () => {},
};

export const GlobalContext = createContext<GlobalContextValue>(initialValue);

const GlobalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType | undefined>();
  const handleModalOpen = (type: ModalType) => {
    setModalType(type);
  };
  const handleModalClose = () => {
    setModalType(undefined);
  };
  const contextValue = useMemo(
    () => ({ modalType, handleModalClose, handleModalOpen }),
    [modalType]
  );
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
