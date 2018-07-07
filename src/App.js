import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
  // Link
} from 'react-router-dom';
import Firebase from './config/Firebase';

// component
import Header    from './components/Header/header';
import Footer    from './components/Footer/footer';
import Home      from './components/Pages/home';
import AboutUs   from './components/Pages/about-us';
import ContactUs from './components/Pages/contact-us';
import Login     from './components/Forms/login-form';
import Login2    from './components/Forms/login-form-2';

// includes
import './dist/css/app.min.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    Firebase.auth().onAuthStateChanged((email) => {
      if (email) {
        this.setState({ email });
        // localStorage.setItem('email', email.eid);
      } else {
        this.setState({ email: null });
        // localStorage.removeItem('email');
      }
    });
  }

  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path='./' component={Home} />
          <Route exact path='./about-us' component={AboutUs} />
          <Route exact path='./contact-us' component={ContactUs} />
          <Route exact path='./login' component={Login} />

          {this.state.email ? (<Home />) : (<Login2 />)}

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
