// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  INITIAL_REQ,
  FINAL_REQ,
  GET_CURRENCIESAPI,
  GET_RATES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDIT_FORM_CLICK,
} from '../actions';

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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => Number(expense.id)
        !== Number(action.payload)),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      idToEdit: action.id,
      editor: state.editor !== true,
    };
  case EDIT_FORM_CLICK:
    return {
      ...state,
      editor: false,
      expenses: state.expenses.map((expense) => {
        if (Number(expense.id) === Number(state.idToEdit)) {
          return {
            ...action.payload,
          };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
