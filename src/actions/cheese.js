
const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => {
  type: FETCH_CHEESES_REQUEST
};

const FETCH_CHEESES_SUCESS = 'FETCH_CHEESES_SUCESS';
const fetchCheesesSuccess = (cheeses) => {
  type: FETCH_CHEESES_SUCESS,
  cheeses
};

const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = () => {
  type: FETCH_CHEESES_ERROR
};

const fetchCheeses = () => (dispatch) => {
  fetch('http://localhost:8080/api/cheese')
  .then(res => res.json())
  .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
  .catch(err => console.log(err));
};