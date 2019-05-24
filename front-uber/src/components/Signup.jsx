import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth-service"

export default class Signup extends Component {
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
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    console.log("entra")
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log("state: ",this.state)
    return (
      <div>
        <h2>Sign-up</h2>

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
          <input type="submit" value="Signup" />
        </form>

        <p>
          Already have account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}
