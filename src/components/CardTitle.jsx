import React, { useState } from "react";

const CardTitle = ({ name, img, options }) => {
  const [toggle, setToggle] = useState(true);
  const handleMouseEnter = (e) => {
    e.target.querySelector("img").style.transform = "scale(0.8)";
    e.target.style.transform = "rotate(5deg)";
  };
  const handleMouseLeave = (e) => {
    e.target.querySelector("img").style.transform = "scale(1)";
    e.target.style.transform = "rotate(0deg)";
  };
  return (
    <div
      className="card col-6"
      role="button"
      onClick={() => setToggle(!toggle)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toggle ? (
        <div>
          <img src={img} alt="" width="150px" height="100px" />
          <h6>{name}</h6>
        </div>
      ) : (
        <div className="cardback">
          {options.map((item, e) => (
            <ul key={e}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardTitle;
