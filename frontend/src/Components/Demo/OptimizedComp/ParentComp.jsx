import { useState } from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  const [toggle, setToggle] = useState(false);

  console.log("Parent renders");

  return (
    <>
      <h1>The Parent Component</h1>

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <ChildComp toggle={true} />
    </>
  );
}

export default ParentComp;
