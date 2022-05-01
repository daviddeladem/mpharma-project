import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = ({
  id,
  name,
  price,
  date,
  handleRemoveProduct
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="product">
      <Card.Body>
        <Card.Title className="product-title">{name}</Card.Title>
        <div className="product-details">
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveProduct(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;