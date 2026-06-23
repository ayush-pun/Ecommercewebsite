import React from "react";

const Randomcard = ({ data }) => {
  console.log("received data:", data);

  return (
    <div>
      <h1>{data.name.first}</h1>
      <p>{data.phone}</p>
      <h3>{data.location.city}</h3>
    </div>
  );
};

export default Randomcard;