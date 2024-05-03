import { memo } from "react";

function ChildComp({ toggle, loggerFn }) {
  console.log("Child Renders");

  return (
    <>
      <h2>The Child Component</h2>
      {toggle && <p>Dynamic Paragraph</p>}

      <button className="btn btn-secondary" onClick={loggerFn}>
        Log
      </button>
    </>
  );
}

export default memo(ChildComp);

// prevProps.toggle === currProps.toggle -> memo() does NOT re-render Child component
// prevProps.toggle !== currProps.toggle -> memo() does re-render the child component

// memo() => does not check for referential equality
