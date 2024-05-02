import Input from "../UI/Input";

function ControlledComp() {
  return (
    <>
      <h1>Form Component</h1>
      <label htmlFor="email">Email : </label>
      <Input id="email" />
    </>
  );
}

export default ControlledComp;
