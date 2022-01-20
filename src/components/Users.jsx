import React, { Component, Fragment } from "react";

import Loading from "./Loading";

import { getUsers } from "../services/api";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  getUsers = async () => {
    const { showLoading, hideLoading } = this.props;
    showLoading("Carregando usuários...")

    const response = await getUsers().then((response) => {
      hideLoading()
      return response;
    });
    console.log({ response });
  };

  render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <button onClick={this.getUsers}>Buscar usuários</button>
      </Fragment>
    );
  }
}

export default Users;
