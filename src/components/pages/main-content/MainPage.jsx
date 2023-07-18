import React from "react";
import PageFooter from "../../footer/footer";
import HeaderPage from "../../header/Header";
import Calculator from "./calculator";

function MainPage() {
  return (
    <>
      <HeaderPage />
      <Calculator />
      <PageFooter />
    </>
  );
}

export default MainPage;
