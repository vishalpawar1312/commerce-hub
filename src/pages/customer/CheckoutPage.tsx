import { useState } from "react";
import type {SubmitEvent} from "react";

function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "UserDetails",
      name, 
      email,
      address,
      cardNumber
    )
  }
  return (
    <div className="checkoutPage">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default CheckoutPage