import React from "react";
import styles from "./Details.module.css";
export default function InputRange(props) {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.amountACon}>
        <label style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          {props.prop2}
        </label>
        <input
          type="text"
          value={props.prop1}
          style={{ fontWeight: "bold", textAlign: "center" }}
          className={styles.inputAmount}
        />
      </div>
      <input
        type="range"
        min={props.prop4.min}
        max={props.prop4.max}
        value={props.prop1}
        onChange={props.handleChange}
        step={props.prop5.step}
        className={styles.inputRange}
      ></input>
      <div className={styles.amountBCon}>
        <p style={{ margin: "3px", fontWeight: "bold" }}>{props.prop3.min}</p>
        <p style={{ margin: "3px", fontWeight: "bold" }}>{props.prop3.max}</p>
      </div>
    </div>
  );
}
