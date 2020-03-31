import React, { Component } from "react";
import { logout, isAuthenticated } from '../../services/auth';

class LogInOut extends Component {

  handleLogout = e => {
    logout();
  };

  renderLogin() {
    return (
      <a href="/login">Entrar</a>
    );
  }

  renderLogout() {
    return (
      <a href="/login" onClick={this.handleLogout}>Sair</a>
    );
  }

  renderActions() {
    return (
      isAuthenticated() ? (
        this.renderLogout()
      ) : (
        this.renderLogin()
      )
    );
  }

  componentDidMount() {
    this.renderActions();
  }

  render() {
    return (
      <div>
        {this.renderActions()}
      </div>
    );
  }
}

export default LogInOut;