import React from "react";
import "./../App.css";
export default function Menu(props) {
  return (
    <div>
      <i className="fas fa-bars sidebarOpen" onClick={props.sideBarOpen}></i>
    </div>
  );
}
