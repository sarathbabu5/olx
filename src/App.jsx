import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
