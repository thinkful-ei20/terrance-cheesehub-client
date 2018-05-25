import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const cheesesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHEESES_REQUEST:
      return {...state, loading: action.loading};
      break;
    case FETCH_CHEESES_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        cheeses: action.cheeses
      };
      break;
    case FETCH_CHEESES_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
      break;
    default:
      return state;
  }
};