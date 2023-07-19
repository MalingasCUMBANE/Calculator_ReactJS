import React, { useEffect, useState } from "react";
import PageFooter from "../../layout/footer/footer";

import Calculator from "./calculator";
import HeaderPage from "../../layout/header/Header";

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
