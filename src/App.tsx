// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';

import './App.css';
import LoanCalculator from "./components/LoanCalculator/LoanCalculator.tsx";

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function App() {
  return (
    <>
      <div className="card">

        <LoanCalculator></LoanCalculator>

      </div>
    </>
  );
}

export default App;
