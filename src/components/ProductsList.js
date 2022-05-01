import React, { useContext } from 'react';
import _ from 'lodash';
import Product from './Product';
import ProductsContext from '../context/ProductsContext';

const ProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <React.Fragment>
      <div className="product-list">
        {!_.isEmpty(products) ? (
          products.map((product) => (
            <Product key={product.id} {...product} handleRemoveProduct={handleRemoveProduct} />
          ))
        ) : (
          <p className="message">No products available. Please add some products.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductsList;