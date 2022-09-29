import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  validateBtn = () => {
    const { email, password } = this.state;
    const minPass = 6;
    const btnValidate = email.includes('@')
    && email.includes('.com')
    && password.length >= minPass;
    this.setState({
      isBtnDisabled: !(btnValidate),
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.validateBtn);
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled } = this.state;

    return (
      <div>
        Login
        <input
          type="text"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape().isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
