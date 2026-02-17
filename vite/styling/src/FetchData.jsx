import React, {useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/posts
function FetchData() {
  const [data, setData] = useState([]);
const fetchdata = async () => {
  const Apidata = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await Apidata.json();
  setData(res);
useEffect(() => {
    fetchdata();
  }, [fetchdata]);
}
  return (
    <div>
      {data.map(item => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default FetchData;
