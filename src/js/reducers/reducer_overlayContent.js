import * as types from '../constants/action_types';

export default function(state = { nada: null }, action) {
  switch (action.type) {
    case types.nada: {
      return { ...state, nada: action.payload };
    }
    default: {
      return state;
    }
  }
}
