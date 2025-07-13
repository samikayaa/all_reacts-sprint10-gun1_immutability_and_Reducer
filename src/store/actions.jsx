export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const RESULT = "RESULT";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
}

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
}

export const result = (total) => {
  return { type: RESULT, payload: total };
}