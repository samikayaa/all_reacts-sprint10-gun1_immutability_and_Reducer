import { APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, RESULT, TYPE_TO_SCREEN, MEMORY_ADD, MEMORY_RECALL, MEMORY_CLEAR } from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    /*
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    */

    case TYPE_TO_SCREEN:
      return {
        ...state,
        total: state.total === 0 ? action.payload : state.total.toString() + action.payload.toString(),
      }

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        total: 0,
        temp: state.total,
      };


    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };


    case RESULT:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
