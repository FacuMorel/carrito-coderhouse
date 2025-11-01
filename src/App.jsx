import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  const welcomeMessage = "¡Bienvenido a nuestra tienda!";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={welcomeMessage} />
    </>
  )
}

export default App
