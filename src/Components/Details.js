import React, { useState, useEffect } from "react";
import styles from "./Details.module.css";
import InputRange from "./InputRange";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
export default function Details(props) {
  const [interestRate, changeInterestRate] = useState(0);
  const [monthlyPayment, changeMonthlyPayment] = useState(0);
  var LoanAmount = useSelector(state => state.LoanAmount);
  var Duration = useSelector(state => state.Duration);
  const dispatch = useDispatch();
  var handleAmountChange = e => {
    dispatch({ type: "CHANGE_LOAN_AMOUNT", data: e.target.value });
    var history = localStorage.getItem("history");
    if (Duration !== 0) {
      if (history != null) {
        var data1 = { LoanAmount: e.target.value, Duration: Duration };
        var parsedArray = JSON.parse(history);
        parsedArray.push(data1);
        dispatch({ type: "CHANGE_HISTORY", data: parsedArray });
        localStorage.setItem("history", JSON.stringify(parsedArray));
      } else {
        var data = [{ LoanAmount: e.target.value, Duration: Duration }];
        dispatch({ type: "CHANGE_HISTORY", data: data });
        localStorage.setItem("history", JSON.stringify(data));
      }
    } else {
      return;
    }
  };
  var handleDurationChange = e => {
    dispatch({ type: "CHANGE_DURATION", data: e.target.value });
    var history = localStorage.getItem("history");

    if (LoanAmount !== 0) {
      if (history != null) {
        var data1 = { LoanAmount: LoanAmount, Duration: e.target.value };
        var parsedArray = JSON.parse(history);
        parsedArray.push(data1);
        dispatch({ type: "CHANGE_HISTORY", data: parsedArray });
        localStorage.setItem("history", JSON.stringify(parsedArray));
      } else {
        var data = [{ LoanAmount: LoanAmount, Duration: e.target.value }];
        dispatch({ type: "CHANGE_HISTORY", data: data });
        localStorage.setItem("history", JSON.stringify(data));
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    var history = localStorage.getItem("history");
    if (history) {
      var parsedArray = JSON.parse(history);
      dispatch({ type: "CHANGE_HISTORY", data: parsedArray });
    } else {
      history = [];
      dispatch({ type: "CHANGE_HISTORY", data: history });
    }
    if (LoanAmount !== 0 && Duration !== 0) {
      var url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${LoanAmount}&numMonths=${Duration}`;
      axios.get(url).then(res => {
        changeInterestRate(res.data.interestRate);
        changeMonthlyPayment(res.data.monthlyPayment.amount);
      });
    }
  }, [LoanAmount, Duration]);

  return (
    <div className={styles.inputs} ref={props.inputConRef}>
      <InputRange
        handleChange={handleAmountChange}
        prop1={LoanAmount}
        prop2="Loan Amount"
        prop3={{ min: "500$", max: "5000$" }}
        prop4={{ min: 500, max: 5000 }}
        prop5={{ step: 1 }}
      />
      <InputRange
        handleChange={handleDurationChange}
        prop1={Duration}
        prop2="Tenure (months)"
        prop3={{ min: "6", max: "24" }}
        prop4={{ min: 6, max: 24 }}
        prop5={{ step: 1 }}
      />

      <h2 style={{ color: "white", marginBottom: "10px" }}>
        Interest Rate:{interestRate}
      </h2>
      <h2 style={{ color: "white", marginTop: "0px" }}>
        Monthly Payment:{monthlyPayment}
      </h2>
    </div>
  );
}
