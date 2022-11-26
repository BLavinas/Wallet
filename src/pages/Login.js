import * as React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { getEmail } from '../redux/actions';
import ResponsiveFontSizes from '../components/MuiHeaders';
import '../Styles/style.css'



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
        <div className='loginTitle'>
        {ResponsiveFontSizes('h3', 'Carteira')}
        </div>
        <div className='inputStyle'>
        <TextField
          id="outlined-basic"
          label="Usuário"
          variant="outlined"
          type="text"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />

        <TextField
          id="outlined-password-input"
          label="Senha"
          autoComplete="current-password"
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          type="button"
          disabled={ isBtnDisabled }
          onClick={ this.handleClick }
        >
          Entrar

        </Button>
        </Stack>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape().isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
