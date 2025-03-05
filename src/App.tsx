// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';

import './App.css';

import LonaQuestion from"./components/LoanQuestion/LoanQuestion.tsx";

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function App() {
  return (
    <>
      <div className="card">

        <LonaQuestion></LonaQuestion>

      </div>
    </>
  );
}

export default App;
