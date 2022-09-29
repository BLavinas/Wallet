// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_EMAIL } from '../actions';

const INITAL_STATE = {
  email: '',
};

const user = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;
