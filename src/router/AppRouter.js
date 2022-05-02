import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditProduct from '../components/EditProduct';
import ProductsContext from '../context/ProductsContext';

const AppRouter = () => {
  const [products, setProducts] = useLocalStorage('products', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ProductsContext.Provider value={{ products, setProducts }}>
            <Switch>
              <Route component={ProductsList} path="/" exact={true} />
              <Route component={AddProduct} path="/add" />
              <Route component={EditProduct} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ProductsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;