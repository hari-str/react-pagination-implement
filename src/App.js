import React from "react";
import HomeComponent from "./components/HomeComponent";
import SideMenu from "./components/SideMenu";
import "./App.css";

const App = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* sidemenu */}
          <SideMenu />
          {/* Homecomponent */}
          <HomeComponent />
        </div>
      </section>
    </>
  );
};

export default App;
