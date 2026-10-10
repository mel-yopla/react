// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Coin from "./components/Coin";
import coins from "../data/coins";

function App() {
  return (
    <div>
      {coins.map((coin) => (
        <Coin
          key={coin.code}
          order={coin.order}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.price}
          priceChange={coin.priceChange}
          code={coin.code}
        />
      ))}
    </div>
  );
}

export default App;
