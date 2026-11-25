import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const totalItems = cartItems.reduce(
    (total, item) => (total + item.quantity),
    0);

  const subtotal = cartItems.reduce((total, item) => (
    total + item.quantity * item.price
  ), 0)
  const increaseQtyHandler = (itemId: string) => {
    dispatch(increaseQuantity({ itemId }));
  };

  const decreaseQtyHandler = (itemId: string) => {
    dispatch(decreaseQuantity({ itemId }));
  };
  const removeFromCartHandler = (itemId: string) => {
    dispatch(removeFromCart({ itemId }))
  }
  const checkoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <div className="cartPage">
      <h1>Cart</h1>

      {cartItems.length === 0 && (
        <p className="emptyState">Your cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div className="cartItem" key={item.id}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>

          <button
            type="button"
            onClick={() => decreaseQtyHandler(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => increaseQtyHandler(item.id)}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => removeFromCartHandler(item.id)}
          >
            X
          </button>
        </div>
      ))}

      <div className="cartSummary">
        <p>Total Items: {totalItems}</p>
        <p>Subtotal: ₹{subtotal}</p>
      </div>
      <button type="button" onClick={checkoutHandler}>Proceed to Checkout</button>
    </div>
  );
}