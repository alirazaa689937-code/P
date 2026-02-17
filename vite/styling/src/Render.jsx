import React, { useCallback } from "react";
function LargeList({ items }) {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item} onClick={handleClick}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default LargeList;