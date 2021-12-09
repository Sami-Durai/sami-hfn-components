import React from "react";

//import { toggleSideBar } from "utils/common";

import { sidebar } from "sami-sidebar";

const Header = () => {
  return (
    <nav className="header-nav">
    <div className="menu-toggler" onClick={() => { sidebar.toggle(); }}>
      <i className="uil uil-bars"></i>
    </div>
      <div className="header-text p-d-flex p-text-center p-jc-center">
        <h3> Heartfulness Dynamic Components </h3>
      </div>
    </nav>
  );
}

export default Header;
