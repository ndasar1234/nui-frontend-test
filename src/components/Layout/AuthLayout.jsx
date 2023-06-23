import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarToggle } from "./../../utils/toggler.js";
import Navbar from "../Navbar/Index";


function AuthLayout() {
  const isDesktop = () => document.body.clientWidth > 768;
  const [sidebarStatus, setSidebarStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebarStatus(isDesktop());
    });
    return () => window.removeEventListener("resize", isDesktop);
  }, []);

  return (
    <div className="adminLayout">
      
      {/* Sidebar */}
      <Sidebar
        toggle={sidebarToggle}
        className={sidebarStatus ? "" : "mobile"}
      />

      {/* Main Wrapper */}
      <div className="mainWrapper">
        <main className="h-full">
          <Navbar toggle={sidebarToggle} />
          <Outlet context={[sidebarToggle]} />
        </main>
        
      </div>
    </div>
  );
}

export default AuthLayout;
