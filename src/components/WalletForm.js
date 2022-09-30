import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    // value: '',
    // description: '',
    // currency: '',
    // method: '',
    // tag: '',
    // expenses: [],

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

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <input
          type="text"
          name="value"
          data-testid="value-input"
          placeholder="Valor da despesa"
          onChange={ this.handleChange }
        />
        <input
          type="text"
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
          {currencies.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              {currencie}
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
        <button type="button">Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  dispatch: propTypes.func.isRequired,
};
