import React from "react";

import '../../styles/components/stylesCardNavers.css';

function CardNavers({ data }) {
  return (
    <>
      {data.map((data) => (
        <div className="cardNavers" key={data.id}>
          <div >
            <img className="imgNaver" src={data.image_url} alt="" />
          </div>
          <div className="text">
            <p className="name">{data.name}</p>
            <p className="job">{data.job_role}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardNavers;
