import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Ups, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound

