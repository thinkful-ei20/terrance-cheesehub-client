
import { API_BASE_URL } from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
  type: FETCH_CHEESES_REQUEST
};

export const FETCH_CHEESES_SUCESS = 'FETCH_CHEESES_SUCESS';
export const fetchCheesesSuccess = (cheeses) => {
  type: FETCH_CHEESES_SUCESS,
  cheeses
};

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => {
  type: FETCH_CHEESES_ERROR
};

export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheesesRequest());
  return (
    fetch(`${API_BASE_URL}/api/cheeses`)
    .then( res => {
      if (!res.ok) {
        console.log('err with server response');
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(cheeses => {
      dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(err => {
      dispatch(fetchCheeses(err))
    })
  );
};