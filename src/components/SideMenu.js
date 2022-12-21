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
            <h4 className="sidemenu_title"> University</h4>
          </li>
          <li>
            <span className="sidemenu_icon">
              <i className="fa-solid fa-user-pen"></i>
            </span>
            <h4 className="sidemenu_title">Admisstion</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
