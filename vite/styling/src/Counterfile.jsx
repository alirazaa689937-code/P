import React from "react";
import store from "./store";
function Counterfile() {
  return (
    <div>
      <h2>{store.count}</h2>
      <button onClick={() => store.increment()}>
        Increase
      </button>
    </div>
  );
}  
//  Not understand
export default Counterfile;