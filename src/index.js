import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

const blueCheeses = ['Bath Blue', 'Barkham Blue', 'Buxton Blue']

ReactDOM.render(<CheeseList cheeses={blueCheeses}/>, document.getElementById('root'));
registerServiceWorker();
