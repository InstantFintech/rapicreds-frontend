// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';
import LoanForm from "../LoanForm/LoanForm.tsx";
import LoanCancel from "../LoanCancel/LoanCancel.tsx";
import './Account.css';

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function Account() {
  return (
    <>

      <div className="card">

        <div className="test-container">
          <LoanForm>

          </LoanForm>

          <LoanCancel>

          </LoanCancel>
        </div>

          
      </div>
    </>
  );
}

export default Account;
