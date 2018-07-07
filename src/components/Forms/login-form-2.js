import React, {
  Component
} from 'react';
import ReactDom from 'react-dom';
import Firebase from '../../config/Firebase';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

const FormItem = Form.Item;

class Login2 extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        console.log("yehey");
        alert("Yehey");
    }).catch((error) => {
        console.log(error);
        alert("Error");
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <main >
        <container>

          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('Email', {
                rules: [{ required: true, message: 'Please input your email'}],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)'}} />} type="email" placeholder="Email"
                name="email" value={this.state.email} onChange={this.handleChange}/>
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)'}} />} type="password" placeholder="Password"
                name="password" value={this.state.email} onChange={this.handleChange}/>
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox> Remember me </Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin}>
                Log in
              </Button>
              or <a href="">register now! </a>
            </FormItem>
          </Form>

        </container>
      </main>
    );
  }
}

const WrappedLogin = Form.create()(Login2)
ReactDom.render(<WrappedLogin/>, document.getElementById('root'))

export default WrappedLogin;
