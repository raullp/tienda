import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, FormGroup, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addToCart } from './actions';
import './Producto.css';

class Producto extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selected: 0 }
  }

  handleSelectChange = e => {
    const selected = e.target.value;
    this.setState({ selected });
  };

  addToCart = () => {
    const { addToCart, producto: { id } } = this.props;
    const { selected } = this.state;
    if (selected > 0) {
      addToCart(id, selected);
      this.setState({ selected: 0 });
    }
  };

  render() {
    const { producto: { id, name, price, available, url } } = this.props;
    const { selected } = this.state;
    return (
      <div className="producto">
        <img src={`${process.env.PUBLIC_URL}/${url}`} className="sized-image" alt={name} />
        <FormGroup>
          <h3>{name}</h3>
        </FormGroup>
        <FormGroup>
          <strong>Precio:</strong> ${price}
        </FormGroup>
        <FormGroup>
          <strong>Unidades disponibles:</strong> {available - selected }
        </FormGroup>
        <FormGroup>
          <Col>
            <Link to={`/producto/${id}`}>
              <Button color="primary">Ver Mas</Button>
            </Link>
            <Button color="warning" onClick={this.addToCart}>
              Añadir
            </Button>
            <Input
              type="number"
              min="0"
              max={available}
              size="3"
              step="1"
              onChange={this.handleSelectChange}
              value={selected}
            />
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default connect(null, { addToCart })(Producto);
