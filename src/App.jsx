import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [feetPupId, setFeetPupId] = useState(null)
  console.log("puppyList: ", puppyList);
  
  const featuredPup = puppies.find((pup)=> pup.id === feetPupId)
  console.log(featuredPup)
  return (
    <>
      <div>
        {feetPupId && (
          <div className="card">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppies) => {
          return <p onClick={()=>{setFeetPupId(puppies.id)}} key={puppies.id}>{puppies.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
