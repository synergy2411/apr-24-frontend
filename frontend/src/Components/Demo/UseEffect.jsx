import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("Effect Works");
    return () => {
      console.log("Clean Up");
    };
  }, [counter]);

  return (
    <div className="container">
      <h1>Use Effect Hook Demo</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>

      <button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      {toggle && <p>Toggled Paragraph</p>}
    </div>
  );
}

export default UseEffectDemo;
