import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function Profile() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
    <main className="h-full">
      <Navbar toggle={sidebarToggle} />

      {/* Main Content */}
      <div className="mainCard">Profile</div>
    </main>
  </>
  );
}

export default Profile;
