import React from "react";
import Organisation from "./Organisation";
import Experts from "./Experts";
function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Organisation />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Experts />
        </div>
      </div>
    </div>
  );
}

export default Content;
