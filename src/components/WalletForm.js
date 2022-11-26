import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Styles/style.css'


import { editFormThunk, getCurrencies, getWalletForm } from '../redux/actions';
import ResponsiveFontSizes from '../components/MuiHeaders';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    id: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(getWalletForm(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  };

  editHandleClick = () => {
    const { dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    dispatch(editFormThunk({ value, description, currency, method, tag }));
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description } = this.state;
    return (
      <div>
      <div className='TitleWallet'>
        {ResponsiveFontSizes('h3', 'Adicione sua despesa')}
      </div>
          <FormControl fullWidth sx={{ display: 'flex', gap: 2, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', minWidth: 120}}>
        <TextField
          variant='outlined'
          label='Valor da despesa'
          type="text"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        <TextField
          variant='outlined'
          label='Descrição da despesa'
          type="text"
          value={ description }
          name="description"
          data-testid="description-input"
          onChange={ this.handleChange }

        />
            <InputLabel id="currency"></InputLabel>
        <Select
        sx={{width: '18%'}}
          labelId="currency"
          name="currency"
          id="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {currencies.map((currency) => (
            <MenuItem
              value={ currency }
              key={ currency }
            >
              {currency}
            </MenuItem>))}
        </Select>
        <Select
            sx={{ width: '18%' }}
          name="method"
          id="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <MenuItem value="Dinheiro">Dinheiro</MenuItem>
          <MenuItem value="Cartão de crédito">Cartão de crédito</MenuItem>
          <MenuItem value="Cartão de débito">Cartão de débito</MenuItem>
        </Select>
        <Select
            sx={{ width: '18%' }}
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <MenuItem value="Alimentação">Alimentação</MenuItem>
          <MenuItem value="Lazer">Lazer</MenuItem>
          <MenuItem value="Trabalho">Trabalho</MenuItem>
          <MenuItem value="Transporte">Transporte</MenuItem>
          <MenuItem value="Saúde">Saúde</MenuItem>
        </Select>
        {/* </Box> */}

        {
          editor
            ? (
              <Button
                variant="contained"
                type="button"
                onClick={ this.editHandleClick }

              >
                Editar despesa
              </Button>
            )
            : (
              <Button
                variant="contained"
                type="button"
                onClick={ this.handleClick }
              >
                Adicionar despesa

              </Button>
            )

        }
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.espenses,
  editor: state.wallet.editor,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
};
