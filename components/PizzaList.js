import { pizzas } from '../pizzas.mock';

export const PizzaList = () => {
  //

  return (
    <ul>
      {pizzas.map((pizza) => {
        return <li>{pizza.name}</li>;
      })}
    </ul>
  );
};
