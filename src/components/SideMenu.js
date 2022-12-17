import React from "react";

const SideMenu = () => {
  return (
    <div className="sidemenu_container">
      <h1>Dashboard</h1>
      <div className="sidemenu">
        <ul className="sidemenu_list">
          <li>
            <span className="sidemenu_icon">
              <i className="fa-solid fa-building-columns"></i>
            </span>
            University
          </li>
          <li>
            <span className="sidemenu_icon">
              <i className="fa-solid fa-user-pen"></i>
            </span>
            Admisstion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
