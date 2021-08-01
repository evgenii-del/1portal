import React, { FC } from "react";
import Stepper from "./pages/Stepper";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
