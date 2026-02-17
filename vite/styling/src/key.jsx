
import React from "react";

function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;
// in the above code  key is missing 
// without key it work with the bad performance 
// using key react find the the data efficiently
