import React from "react";

function ErrorMessage({ errorMessage }) {
  return (
    <div className="error-message">
      <h2 className="animate">{errorMessage}</h2>
    </div>
  );
}

export default ErrorMessage;
