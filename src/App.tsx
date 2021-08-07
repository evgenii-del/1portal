import React, { FC } from "react";
import Stepper from "./pages/Stepper";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Stepper />
      </div>
      <Footer />
    </div>
  );
};

export default App;
