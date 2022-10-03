import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getCurrencies, getWalletForm } from '../redux/actions';

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

  // valueByCurrency = () => {
  //   // const
  // };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        WalletForm
        <input
          type="text"
          name="value"
          value={ value }
          data-testid="value-input"
          placeholder="Valor da despesa"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          value={ description }
          name="description"
          data-testid="description-input"
          placeholder="Descrição da despesa"
          onChange={ this.handleChange }

        />
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {currencies.map((currency) => (
            <option
              value={ currency }
              key={ currency }
            >
              {currency}
            </option>))}
        </select>
        <select
          name="method"
          id="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.espenses,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  dispatch: propTypes.func.isRequired,
};
