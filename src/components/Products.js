import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Products = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://www.mocky.io/v2/5c3e15e63500006e003e9795")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
 const products =users.products.map(
        (element) => {
            return (
                <Card style={{ width: '18rem' }} className="product">
                <Card.Body>
                    <Card.Title className="product-title">{element.name}</Card.Title>
                    <div className="product-details">
                    <div>
                        {element.prices.map(list => 
                        <div className="product-details">
                            <div> Price:{list.price}</div>
                             <div>Date:{new Date(list.date).toDateString()}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </Card.Body>
                </Card>
            );
        }
    )

  return (
     <div className="product-list">
       {products}
    </div>
  );
};

export default Products;