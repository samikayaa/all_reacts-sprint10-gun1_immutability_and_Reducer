import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import { applyNumber, changeOperation, clearDisplay, result, typeToScreen, memoryAdd, memoryRecall, memoryClear } from './store/actions.jsx';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (event) => {
    //dispatch(applyNumber(event.target.value)); //bunu kaldırıyoruz.
    dispatch(typeToScreen(event.target.value))
  }

  const handleApplyOperation = (event) => {
    dispatch(changeOperation(event.target.value));
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }

  const handleResult = () => {
    dispatch(result());
  }

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  }

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryAdd} />
              <CalcButton value={'MR'} onClick={handleMemoryRecall} />
              <CalcButton value={'MC'} onClick={handleMemoryClear} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber} />
              <CalcButton value={3} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber} />
              <CalcButton value={5} onClick={handleApplyNumber} />
              <CalcButton value={6} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber} />
              <CalcButton value={8} onClick={handleApplyNumber} />
              <CalcButton value={9} onClick={handleApplyNumber} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleApplyOperation} />
              <CalcButton value={0} onClick={handleApplyNumber} />
              <CalcButton value={'-'} onClick={handleApplyOperation} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleApplyOperation} />
              <CalcButton value={'/'} onClick={handleApplyOperation} />
              <CalcButton value={'CE'} onClick={handleClearDisplay} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleResult} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
