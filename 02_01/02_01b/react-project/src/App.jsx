import { useState } from 'react';
import './App.css'
import DSC_0196 from './images/DSC_0196.jpg'
const dish = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi"
];
const dishesObject = dish.map((dish, i) => (
  {
    id: i,
    title: dish
  }
));
function Header({name , year}) {
  return (
    <header>
      <h1>New react project {name}</h1>
      <h2>Copyright {year}</h2>
    </header>
  );
}
function Main({dishes}) {
  return(
    <>
    <div>
      <h1>My favourite dishes</h1>
    </div>
    <main>
    <img src={DSC_0196} height={200} alt='A photo of pranav'/>
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
      ))}
    </ul>
    </main>
    </>
  );
}
function App() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>the restaurant is currently {" "} {status ? "Open" : "Closed"}</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} restaurant
      </button>
    <Header name="LearningEssentials" year={new Date().getFullYear()} />
    <Main dishes={dishesObject} />
    </div>
  );
}

export default App
