import React, {useEffect, useState} from "react";
import service from './service';

const Tuits = () => {
  const [tuits, setTuits] = useState([]);
  useEffect(() => service.findAllTuits().then((tuits) => setTuits(tuits)));
  return (
    <div>
      <h2>Tuits</h2>
      <ul className="list-group">
        {tuits.map((tuit) => (
          <li key={tuit._id} className="list-group-item">
            {tuit.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tuits;
