import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { isTouched: state.isTouched, value: action.value };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return { isTouched: false, value: "" };
    case "SUBMIT":
      return { isTouched: true, value: state.value };
    default:
      return initialState;
  }
};

const useInput = (validation) => {
  const [inputValue, dispatch] = useReducer(httpReducer, initialState);
  const valueIsValid = validation(inputValue.value);
  const isNotValid = inputValue.isTouched && !valueIsValid;

  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const inputTouchHandler = () => {
    dispatch({ type: "SUBMIT" });
  };

  return {
    blurHandler,
    changeHandler,
    value: inputValue.value,
    isTouched: inputValue.isTouched,
    isNotValid,
    touchOnSubmit: inputTouchHandler,
    reset,
    valueIsValid
  };
};

export default useInput;
