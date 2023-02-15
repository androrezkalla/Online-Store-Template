import products from "../data";

const SaleProducts = () => {
  const saleProducts = products.filter(product => product.onSale);
  return (
    <div>
      <h2>Products on Sale:</h2>
      <ul>
        {saleProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default SaleProducts;