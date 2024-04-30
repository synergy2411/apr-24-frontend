import React from "react";

function Expenses() {
  let product = {
    name: "Apple iPhone",
    quantity: 199,
    description: "This is awesome iPhone",
  };

  let friends = ["Monica", "Joe", "Ross", "Rachel", "Chandler"];

  return (
    <div>
      <h2>Expenses coming soon...</h2>
      <p>Name : {product.name}</p>
      <p>Quantity : {product.quantity}</p>
      <p>
        {product.quantity > 0
          ? "Product is available"
          : "Product is unavailable"}
      </p>
      <p>{product.description}</p>
      <h2>Friends</h2>
      <hr />
      <ul>
        {friends.map((friend) => (
          <li>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
