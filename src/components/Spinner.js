import React from "react";
import loading from "../assets/loading.gif";

const spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" id="spin" src={loading} alt="loading" />
    </div>
  );
};

export default spinner;
