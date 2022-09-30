// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIESAPI = 'GET_CURRENCIESAPI';
export const INITIAL_REQ = 'INITIAL_REQ';
export const FINAL_REQ = 'FINAL_REQ';

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
