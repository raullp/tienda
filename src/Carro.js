import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Label, ButtonGroup, Button, ListGroup, ListGroupItem} from 'reactstrap';
import { cancelCart, checkInCart } from './actions'
import './Carro.css';

const Carro = ({ productos, total, pagar, cancelar, history }) => (
  <div className="carro">
    <Row className="cabecera">
      <h3>Carrito de Compras</h3>
    </Row>
    <Row>
      <Col sm={6}>
        <ListGroup>
          {
            productos.map(producto => (
              <ListGroupItem key={producto.id}>
                <img src={`${process.env.PUBLIC_URL}/${producto.url}`} className="pull-left sized-image" alt={producto.name} />
                <div>
                  <h3>{producto.name}</h3>
                  <div><strong>Unidades:</strong> {producto.amount}</div>
                  <div><strong>Subtotal:</strong> $ {producto.subtotal}</div>
                </div>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Col>
      <Col sm={6}>
        <Row>
          <Label>Total ${total}</Label>
        </Row>
        <Row>
          <ButtonGroup>
            <Button onClick={() => pagar() && history.push('/')}>Cancelar</Button>
            <Button onClick={() => cancelar() && history.push('/')}>Pagar</Button>
          </ButtonGroup>
        </Row>
      </Col>
    </Row>
  </div>
);

const mapStateToProps = ({ reducers: { cart, productos } }) => {
  const productosEnCarro = [];
  let total = 0;
  cart.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    const subtotal = producto.price * item.amount;
    productosEnCarro.push({ ...producto, amount: item.amount, subtotal });
    total += subtotal;
  });
  console.log({
    productos: productosEnCarro,
    total,
  });
  return {
    productos: productosEnCarro,
    total,
  };
};

const mapDispatchToProps = {
  pagar: checkInCart,
  cancelar: cancelCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Carro);