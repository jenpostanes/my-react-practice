import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';


class LoginForm extends Component {

  render() {
    return (
      <Container>
        <Form className="login__form">
          <Form.Field>
            <label>Email</label>
            <input type="email" id="email" name="email"/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" id="password" password="password"/>
          </Form.Field>
          <Button>Sign In</Button>
        </Form>
      </Container>
    );
  }
}


export default LoginForm;
