import { pizzas } from '../pizzas.mock';

export const PizzaList = (props) => {
  const listToRender = props.items ?? pizzas;

  return (
    <ul>
      {listToRender.map((pizza) => {
        return <li>{pizza.name}</li>;
      })}
    </ul>
  );
};
