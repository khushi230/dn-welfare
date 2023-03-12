import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import History from "./History";
import FieldsOfChange from "./FieldsOfChange";
import Impact from "./Impact";
import GetInvolved from "./GetInvolved";
import SupportCause from "./SupportCause";
import MobileNavbar from "./MobileNavbar";

const Body = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const isMobile = window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div>
      <Banner />
      <History />
      <FieldsOfChange />
      <Impact />
      <GetInvolved />
      <SupportCause />
    </div>
  );
};

export default Body;
