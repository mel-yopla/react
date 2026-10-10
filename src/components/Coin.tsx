// import type { CoinProps } from "../../interfaces/Coin";
import type CoinInterface from "../../interfaces/CoinInterface";

const Coin = ({
  order,
  name,
  symbol,
  price,
  priceChange,
  code,
}: CoinInterface) => {
  return (
    <div>
      <h1>Coin Component</h1>
      <span>{order}</span>
      <h2>{name}</h2>
      <span>{code}</span>
      <span>{symbol}</span>
      <span>{price}</span>
      <span>{priceChange}</span>
    </div>
  );
};

export default Coin;
