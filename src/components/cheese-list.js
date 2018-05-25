import React from 'react';

const CheeseList = (props) => {
  const cheeseList = props.cheeses.map((cheese, index) => {
    return <li key={index}>{cheese}</li>
  }); 

  return (
    <ul>
      {cheeseList}
    </ul>
  );
}

export default CheeseList;
