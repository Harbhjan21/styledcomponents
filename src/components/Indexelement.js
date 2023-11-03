import React from "react";
import { Navigate } from "react-router-dom";

const Indexelement = () => {
  return <Navigate to="home" state={{ category: "home" }} />;
};

export default Indexelement;
