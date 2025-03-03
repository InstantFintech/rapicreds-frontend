// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function Contact() {
  return (
    <>

      <div className="card">


      </div>
    </>
  );
}

export default Contact;
