import AuthContextProvider from "./context/AuthContext";
import GlobalContextProvider from "./context/GlobalContext";
import BaseLayout from "./layouts";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <AuthContextProvider>
          <BaseLayout>
            <Home />
          </BaseLayout>
        </AuthContextProvider>
      </GlobalContextProvider>
    </>
  );
};

export default App;
