import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import TableForm from '../components/Table';
import '../Styles/style.css'

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className='Title'>MyWallet</h1>
        <br />
        <br />
        <br />
        <WalletForm />
        <br />
        <br />
        <br />
        <TableForm />
      </div>
    );
  }
}

export default Wallet;
