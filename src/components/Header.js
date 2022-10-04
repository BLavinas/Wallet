import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpense = () => {
    const { expenses } = this.props;
    return expenses.reduce((prev, curr) => {
      const { currency } = curr;
      prev
        += curr.exchangeRates[currency].ask
          * curr.value;

      return prev;
    }, 0).toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    // console.log(expenses[0].exchangeRates);
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {expenses && this.totalExpense()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;
