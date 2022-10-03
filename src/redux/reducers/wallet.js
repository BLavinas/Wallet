// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { INITIAL_REQ, FINAL_REQ, GET_CURRENCIESAPI, GET_RATES } from '../actions';

const INITAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  loading: false,
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case INITIAL_REQ:
    return {
      ...state,
      loading: true,
    };
  case GET_CURRENCIESAPI:
    return {
      ...state,
      currencies: action.payload,
    };
  case FINAL_REQ:
    return {
      ...state,
      loading: false,
    };
  case GET_RATES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
