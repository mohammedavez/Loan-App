import React from "react";
import "./../App.css";
import { useDispatch, useSelector } from "react-redux";
export default function SideBar(props) {
  const dispatch = useDispatch();
  const history = useSelector(state => state.history);
  return (
    <div className="sidebar" ref={props.sidebarRef}>
      <h3 className="sidebarHeading">History</h3>
      <i onClick={props.sideBarClose} className="fas fa-times close"></i>
      <div style={{ borderTop: "1px solid #fae596" }} />
      <div className="history">
        {history.length ? (
          history.map((item, key) => (
            <div
              key={key}
              onClick={() =>
                dispatch({
                  type: "POPULATE",
                  data: { LoanAmount: item.LoanAmount, Duration: item.Duration }
                })
              }
            >
              <p style={{ marginLeft: "10px" }}>
                Loan Amount:{item.LoanAmount}
              </p>
              <p style={{ marginLeft: "10px" }}>Duration:{item.Duration}</p>
              <div style={{ borderTop: "1px solid #dddfd4" }} />
            </div>
          ))
        ) : (
          <h2>Nothing to show</h2>
        )}
      </div>
    </div>
  );
}
