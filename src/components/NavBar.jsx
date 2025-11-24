import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const CATEGORIAS = [
  { id: 'all', label: 'Todos' },
  { id: 'electronica', label: 'Electrónica' },
  { id: 'accesorios', label: 'Accesorios' },
  { id: 'kits', label: 'Combos' },
]

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>
            <Link to="/" className="logo-link">Mi Tienda</Link>
          </h2>
        </div>
        <ul className="navbar-links">
          {CATEGORIAS.map((cat) => (
            <li key={cat.id}>
              <Link to={cat.id === 'all' ? '/' : `/category/${cat.id}`}>{cat.label}</Link>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;



