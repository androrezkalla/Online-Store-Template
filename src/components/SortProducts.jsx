import products from "../data";

const SortProducts = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    return (
      <div>
        <h2>Sorted Products by Price:</h2>
        <ul>
          {sortedProducts.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SortProducts;