import React, { useEffect, useState } from "react";
import { CardNavers } from "../../componenst";
import axios from "../../Ultis/axios";

import logo from "../../assets/img/logo-black.png";
import "../../styles/pages/stylesHome.css";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get()
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <header>
        <img src={logo} alt="" />
      </header>
      <div className="navers">
        <h3>Navers</h3>
        <main >
          <CardNavers data={data} />
        </main>
      </div>
    </div>
  );
}

export default Home;
