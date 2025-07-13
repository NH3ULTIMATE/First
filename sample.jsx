//use state and use effect

import React, { useEffect, useState } from "react";

function Form() {
  const [username, setUserName] = useState("");
  const [value, setValue] = useState(false);
  useEffect(() => {
    if (username !== "") {
      setValue(true);
    } else {
      setValue(false);
    }
  });
  const update = () => {
    if (value) {
      alert("form is submitted");
    } else {
      alert("value is blank");
    }
  };
  return (
    <div>
      <form onSubmit={update}>
        <input
          className="inset-ring-black inset-ring-2"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
