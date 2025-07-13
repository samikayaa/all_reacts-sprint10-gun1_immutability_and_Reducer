import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import { applyNumber } from './store/actions.jsx';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (event) => {
    dispatch(applyNumber(event.target.value));
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
              <CalcButton value={'M+'} />
              <CalcButton value={'MR'} />
              <CalcButton value={'MC'} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber()} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>
            <div className="row">
              <CalcButton value={'+'} />
              <CalcButton value={0} />
              <CalcButton value={'-'} />
            </div>
            <div className="row">
              <CalcButton value={'*'} />
              <CalcButton value={'/'} />
              <CalcButton value={'CE'} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
