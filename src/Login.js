import React from 'react';
import Background from './images/login-fondo.jpg';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { loginSuccess } from './actions';
import { connect } from 'react-redux';
import './Login.css';
const Login = ({ history, login }) => (
  <div className="login">
    <img src={Background} className="bg" />
      <div className="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4">
        <Form
          onSubmit={event => {
            event.preventDefault();
            login({ name: 'Edy Reyes Rojas', email: 'reyesrojasedy@gmail.com'});
            history.push('/principal');
          }}
        >
          <FormGroup>
            <h2>Inicia Sesión</h2>
          </FormGroup>
          <FormGroup>
            <Label for="email">Correo Electronico</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="juan.perez@tienda.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </FormGroup>
          <Button
            type="submit"
            className="center-block"
            color="success"
          >
            Ingresar
          </Button>
        </Form>
      </div>
  </div>
);

export default connect(null, { login : loginSuccess })(Login);
