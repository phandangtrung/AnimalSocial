import React from "react";

import "./style.scss";

import Header from "../../components/Header";
import Leftbar from "../../components/Leftbar";
import Rightbar from "../../components/Rightbar";
function HomePage() {
  return (
    <div>
      <Header />
      <div className="home__body">
        <Leftbar />
        <Rightbar />
      </div>
    </div>
  );
}

export default HomePage;
