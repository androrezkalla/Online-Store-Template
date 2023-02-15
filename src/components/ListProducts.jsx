import products from "../data";

const ListProducts = () => {
    return (
      <div>
        <h2>List of Available products:</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListProducts;