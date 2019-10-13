const initialState = {
  LoanAmount: 0,
  Duration: 0,
  history: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "POPULATE":
      return {
        ...state,
        LoanAmount: action.data.LoanAmount,
        Duration: action.data.Duration
      };
    case "CHANGE_LOAN_AMOUNT":
      return {
        ...state,
        LoanAmount: action.data
      };
    case "CHANGE_DURATION":
      return {
        ...state,
        Duration: action.data
      };
    case "CHANGE_HISTORY":
      return {
        ...state,
        history: action.data
      };
    default:
      return state;
  }
}
