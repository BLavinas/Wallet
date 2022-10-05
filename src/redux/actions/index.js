// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIESAPI = 'GET_CURRENCIESAPI';
export const INITIAL_REQ = 'INITIAL_REQ';
export const FINAL_REQ = 'FINAL_REQ';
export const GET_RATES = 'GET_RATES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDIT_FORM_THUNK = 'EDIT_FORM_THUNK';
export const EDIT_FORM_CLICK = 'EDIT_FORM_THUNK';

// Pegar email do estado local
export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
// Requisição das moedas na API
export const getCurrenciesApi = (payload) => ({
  type: GET_CURRENCIESAPI,
  payload,
});
export const finalReq = {
  type: FINAL_REQ,
};

export const initialReq = {
  type: INITIAL_REQ,
};

export const getRates = (payload) => ({
  type: GET_RATES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  dispatch(initialReq);
  try {
    const apiData = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await apiData.json();
    delete currencies.USDT;

    dispatch(getCurrenciesApi(Object.keys(currencies)));
    // DEPOIS
    dispatch(finalReq);
  } catch (e) {
    throw new Error(e);
  }
};
export const getWalletForm = (obj) => async (dispatch) => {
  dispatch(initialReq);
  try {
    const apiData = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await apiData.json();
    obj.exchangeRates = currencies;
    dispatch(getRates((obj)));
    // DEPOIS
    dispatch(finalReq);
  } catch (e) {
    throw new Error(e);
  }
};
export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  id,
});
export const editFormClick = (objState) => ({
  type: EDIT_FORM_CLICK,
  payload: objState,
});

export const editFormThunk = (objState) => (dispatch, getState) => {
  const getId = getState().wallet.expenses.findIndex((expense) => expense.id
  === Number(getState().wallet.idToEdit));
  const newState = {
    ...objState,
    id: getId,
    exchangeRates: getState().wallet.expenses[getId].exchangeRates,
  };
  dispatch(editFormClick(newState));
};
