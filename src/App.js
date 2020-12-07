import React,{ useState } from "react";
import "./styles.css";

export default function App() {

  const emogiDatabase = {
    "👶": "Baby",
    "👼": "Baby Angel",
    "🎅": "Santa Claus",
    "🤶": "Mrs. Claus",
    "👪": "Family",
    "🦌": "Deer",
    "🍪": "Cookie",
    "🥛": "Glass of Milk",
    "🍷": "Wine Glass",
    "🍴": "Fork and Knife",
    "⛪": "Church",
    "🌟": "Glowing Star",
    "❄️": "Snowflake",
    "⛄": "Snowman Without Snow",
    "🔥": "Fire",
    "🎄": "Christmas Tree",
    "🎁": "Wrapped Gift",
    "🧦": "Socks",
    "🔔": "Bell",
    "🎶": "Musical Notes",
    "🕯️": "Candle",
    "🛐": "Place of Worship",
    "✝️": "Latin Cross",
    "🧝‍♀️": "Woman Elf",
    "☃️": "Snowman",
    "🧝‍♂️": "Man Elf",
    "🧑‍🎄": "Mx Claus"
  };

  const emogiWeKnow = Object.keys(emogiDatabase);
  const [meaning,setMeaning] = useState("");
  const [Mean,setMean] = useState("Meaning : ");

  const inputHandler = (event) => {
       const meaning = emogiDatabase[event.target.value];
       if(meaning){
        setMeaning(meaning);
        setMean("Meaning : ");
       }
       else if(event.target.value === ""){
        setMeaning("");
        setMean("Meaning : ");
       }
       else{
        setMean("");
        setMeaning("sorry, we don't know the meaning of this emogi")
       }
  }
  

  const emogiHandler = (emogi) => {
     setMeaning(emogiDatabase[emogi]);
     setMean("Meaning : ");
     let input = document.querySelector('#input');
     input.value = emogi;
  }

  return (
    <div className="App">
      <nav>
        <h1><span role="img" aria-labelledby="christmas-tree">🎄</span>Christmas <span className="emogi">emogi</span> interpreter</h1>
      </nav>
    <div className="interpreter">
    <h1><span role="img" aria-labelledby="christmas-tree">🎄</span></h1>
      <input id="input" type="text" onChange={() => inputHandler(event)} placeholder="Search emogies here" />
      <h3> <span style={{color:"Red"}}>{Mean}</span>  <span style={{color:"purple"}}>{meaning}</span> </h3>
      <h2>Christmas emogies in our database are : </h2>
      <h2 className="database">
        {
           emogiWeKnow.map((emogi) => {
             return <span 
             style={{
              padding:"1rem",
              cursor:"pointer" 
             }}

             key={emogi}
             
             onClick={() => emogiHandler(emogi)}
             >
             {emogi}
             </span>
           })
        }
      </h2>
    </div>
      
    </div>
  );
}