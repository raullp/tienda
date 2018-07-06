import React from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Label,
  Input,
  FormGroup,
} from 'reactstrap';
import Producto from './Producto';

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', productos:  props.productos  };
  }

  componentWillReceiveProps(newProps) {
    const { productos } = newProps;
    this.setState({ productos });
  }

  handleFilterChange = e => {
    const filter = e.target.value;
    let productos = this.props.productos;
    if (filter) {
      productos = productos.filter(p => p.name.toLowerCase().includes(filter));
    }
    this.setState({ productos });
  };

  render() {
    const { productos } = this.state;
    return (
      <div className="catalogo">
        <Row className="header">
          <Col sm={8}>
            <h3>Catalogo de Productos</h3>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Qué estas buscando?</Label>
              <Input
                onChange={this.handleFilterChange}
                placeholder="Sandia"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="productos">
          {
            productos.map(producto =>
              <Col sm={3} key={producto.name}>
                <Producto producto={producto}/>
              </Col>
            )
          }
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ reducers: { productos } }) => {
  return {
    productos,
  }
};

export default connect(mapStateToProps)(Catalogo);
