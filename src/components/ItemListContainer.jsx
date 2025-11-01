import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <div className="container-content">
        <h1 className="welcome-message">{greeting}</h1>
        <p className="subtitle">Próximamente nuestros producotos aquì</p>
      </div>
    </div>
  );
}

export default ItemListContainer;


