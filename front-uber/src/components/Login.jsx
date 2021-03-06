import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </div>

            <input type="submit" value="Login" />
          </form>
          <p>
            Don't have account?
            <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
