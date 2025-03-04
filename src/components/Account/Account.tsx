// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';
import './Account.css';
import LoanSignUp from '../LoanSignUp/LoanSignUp';
import LoanLogin from '../LoanLogin/LoanLogin';


/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function Account() {
  return (
    <>

      <div className="card">

        <div className="test-container">
          
        <LoanSignUp></LoanSignUp>
         <LoanLogin></LoanLogin>
          

        </div>

          
      </div>
    </>
  );
}

export default Account;
