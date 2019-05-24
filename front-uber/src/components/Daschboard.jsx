import React, { Component } from "react";

export default class Daschboard extends Component {
  render() {
    return (
      <div>
        <h2> Your laundry Dashboard </h2>

        <ul>
          <li>
            {" "}
            <a href="/launderers"> Find a Launderer </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/logout"> Log Out </a>{" "}
          </li>
        </ul>

        <h3> Want to become a launderer? </h3>

        <form action="/launderers" method="post">
          <div>
            <label for="fee-input"> Set your fee </label>
            <input type="number" name="fee" id="fee-input" />
          </div>

          <button> Become a Launderer </button>
        </form>
      </div>
    );
  }
}
