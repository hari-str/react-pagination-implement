import React from "react";
import Table from "./components/Table";
import SideMenu from "./components/SideMenu";
import "./App.css";

const App = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* sidemenu */}
          <SideMenu />
          {/* Home */}
          <Table />
        </div>
      </section>
    </>
  );
};

export default App;
