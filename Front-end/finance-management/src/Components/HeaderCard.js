import React from "react";

function HeaderCard(props) {
  return (
    <div className="w-3/12 mx-6 my-6">
      <div className="relative block rounded-xl border p-8 shadow-xl">
        <p className="text-lg font-medium">{props.heading}</p>
        <div className="text-5xl font-medium">{props.stats}</div>
        <div className="text-gray-600">{props.content}</div>
      </div>
    </div>
  );
}

export default HeaderCard;
