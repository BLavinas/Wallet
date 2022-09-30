import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <input
          type="text"
          name="expense"
          data-testid="value-input"
        />
        <input
          type="text"
          name="expenseDescription"
          data-testid="description-input"
        />
        <select name="currency" id="currency" data-testid="currency-input">
          {currencies.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              {currencie}
            </option>))}
        </select>
        <select
          name="methodPayment"
          id="methodPayment"
          data-testid="method-input"
        >
          <option value="money">Dinheiro</option>
          <option value="debit">Cartão de crédito</option>
          <option value="credit">Cartão de débito</option>
        </select>
        <select name="tag" id="tag" data-testid="tag-input">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
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
