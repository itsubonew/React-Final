import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function Home() {
  const nanika = useSelector((state) => state.jungle);
  const dispatch = useDispatch();

  const [rururu, setRururu] = useState(null);

  const addAtsumi = () => {
    dispatch({ type: "ADD_JUNGLE", payload: "atumi" });
  };

  const deleteFunction = (i) => {
    dispatch({ type: "DELETE_JUNGLE", payload: i });
  };

  
  return (
    <div className="home">
      <div className="title">ToDo List</div>
      {/* <button onClick={()=>addAtsumi()}>add atsumi</button> */}

      {nanika && nanika.map((one, i) => (
        <React.Fragment key={i}>
          <li>{one}</li>
          <input type="checkbox" />
          <button onClick={() => deleteFunction(i)}>delete{i}</button>
        </React.Fragment>
      ))}

      

      <input onChange={(e) => setRururu(e.target.value)} /> 
      <button onClick={() => dispatch({ type: "ADD_JUNGLE", payload: rururu })}>
        submit
      </button>
      <br></br>
      <button onClick={() => console.log(nanika)}>
        show state inside store
      </button>
    </div>
  );
}

export default Home;

