import React from "react";

function Input({ name}) {
const handle = (e)=>{
   
}
  return (
    <div>
      <input value={name} onChange={handle}/>
    </div>
  );
}

export default Input;
// import React from "react";
// function Input({ name, onChange }) {
//   return (
//     <div>
//       <input value={name} onChange={onChange} />
//     </div>
//   );
// }

// export default Input;