import { useEffect, useState } from "react";
import jsonData from './Data/data.json'
import Body from './components/Body/Body'
import Header from './components/Header/Header'

function App() {
  const [players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(jsonData);
  }, [])

  const handleAddPlayer = (player) => {
    console.log("add player");
    console.log(player);
    const newCart = [...cart, player]
    setCart(newCart);
  }
  return (
    <div>
      <Header />
      <Body
        players={players}
        handleAddPlayer={handleAddPlayer}
        cart={cart}>
      </Body>
    </div>
  );
}

export default App;
