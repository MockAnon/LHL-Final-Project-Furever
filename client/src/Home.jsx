import React, { Fragment, Component } from 'react';

//import assets
import Login from './Login.jsx';
import Register from './Register.jsx';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginActive: true,
      registerActive: false
    };
  }

  render() {
    return (
      <Fragment>
        <video id="home-video-background" loop autoPlay>
          <source src={require('./assets/bg.mp4')} type="video/mp4" />
        </video>

        <section id="home-panel" className="panel panel-default">
          <h1 className="home-title">
            Fur <i className="fas fa-paw home-title-icon" /> Ever
          </h1>

          {this.greetings()}
        </section>
      </Fragment>
    );
  }

  greetings = () => {
    // show message if already logged in
    if (sessionStorage.getItem('userId')) {
      return 'Already Logged In!';
    }
    // not logged in, show login and register
    return (
      <Fragment>
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-xs-6">
                    <a id="login-form-link" onClick={this.showLogin}>
                      Login
                    </a>
                  </div>
                  <div class="col-xs-6">
                    <a id="register-form-link" onClick={this.showRegister}>
                      Register
                    </a>
                  </div>
                </div>
                <hr />
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    {this.state.loginActive && <Login redirectAdoptPage={this.redirectAdoptPage} />}
                    {this.state.registerActive && <Register redirectAdoptPage={this.redirectAdoptPage} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  showLogin = event => {
    event.preventDefault();
    this.setState({ loginActive: true, registerActive: false });
  };

  showRegister = event => {
    event.preventDefault();
    this.setState({ loginActive: false, registerActive: true });
  };

  redirectAdoptPage = () => {
    this.props.history.push('/adopt');
  };
}

export default Home;
