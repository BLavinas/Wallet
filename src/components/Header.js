import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    totalExpense: 0,
  };

  render() {
    const { email } = this.props;
    const { totalExpense } = this.state;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalExpense}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: propTypes.string.isRequired,
};
