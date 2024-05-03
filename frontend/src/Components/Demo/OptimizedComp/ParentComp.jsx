import { useState, useCallback, useMemo } from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  const [toggle, setToggle] = useState(false);

  console.log("Parent renders");

  //   const loggerFn = useCallback(() => console.log("Logger works!"), []); // xixix0001 -> xixix1099

  const loggerFn = useMemo(() => () => console.log("Logger Again"), []);

  const friends = useMemo(() => ["Monica", "Joey", "Ross", "Chandler"], []);

  return (
    <>
      <h1>The Parent Component</h1>

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <ChildComp toggle={true} loggerFn={loggerFn} friends={friends} />
    </>
  );
}

export default ParentComp;
