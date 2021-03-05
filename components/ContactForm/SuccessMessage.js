import React from "react";
import getLocale from "../../utils/getLocale";

function SuccessMessage({ successMessage }) {
  return (
    <div className="success-message">
      <h2 className="animate">{successMessage}</h2>
    </div>
  );
}

export default SuccessMessage;
