import React, { Component } from "react";
import Layout from "./Layout";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Apps",
    };
  }

  input = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <Layout title={this.state.title}>
        <form method="post" autoComplete="off " className="form w-100">
          <div className="text-center mb-10">
            <h1 className="text-dark mb-3"> Widget One</h1>
            <div className="text-gray-400 fw-bold fs-5">
              Please fill up this form with correctly
            </div>
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">
              Type the title of this web
            </label>
            <input
              type="text"
              name="title"
              className="form-control form-control-lg form-control-solid"
              defaultValue={this.state.title}
              onChange={(e) => this.input(e.target.value)}
            />
          </div>
        </form>
      </Layout>
    );
  }
}
export default Widget;
