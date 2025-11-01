import './CartWidget.css';
import cartIcon from '../assets/cart.svg';

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="imagen de carrito de compra" />
      <span className="cart-count">0</span>
    </div>
  );
}

export default CartWidget;

