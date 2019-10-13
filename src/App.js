import React, { useEffect } from "react";
import "./App.css";
import Details from "./Components/Details";
import Menu from "./Components/Menu";
import SideBar from "./Components/SideBar";
function App() {
  var sidebarRef = React.createRef();
  var inputCon = React.createRef();
  useEffect(() => {
    sidebarRef.current.style.display = "none";
  });
  var sideBarClose = () => {
    console.log(sidebarRef);
    sidebarRef.current.style.display = "none";
  };
  var sideBarOpen = () => {
    sidebarRef.current.style.display = "block";
  };
  return (
    <div className="App">
      <Menu sideBarOpen={sideBarOpen} />
      <SideBar sidebarRef={sidebarRef} sideBarClose={sideBarClose} />
      <div className="details">
        <Details inputConRef={inputCon} />
      </div>
    </div>
  );
}

export default App;
