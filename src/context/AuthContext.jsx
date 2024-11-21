import { createContext, useState, useContext } from "react";

const AppContext = createContext();

const intialState = {
  isAuth: false,
  userDetails: null,
};
export const AppProvider = ({ children }) => {
  const [authState, setAuthState] = useState(intialState);
  const [isLoading, setIsLoading] = useState(false);
  console.log(authState);
  const loginUser = (userDetails) => {
    setAuthState({
      isAuth: true,
      userDetails,
    });
  };

  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      userDetails: null,
    });
  };
  const loadingTrue = () => {
    setIsLoading(true);
  };
  const loadingFalse = () => {
    setIsLoading(false);
  };
  // const providerState = {
  //   authState,
  //   loginUser,
  //   logoutUser,
  // };

  return (
    <AppContext.Provider
      value={{ authState, loginUser, logoutUser, loadingFalse, loadingTrue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
