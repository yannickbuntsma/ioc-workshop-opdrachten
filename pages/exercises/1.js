import { ExercisePage } from '../../components/ExercisePage';
import { PizzaList } from '../../components/PizzaList';
import { pizzas } from '../../pizzas.mock';

/**
 * Implement a function that allows the caller of `filterPizzas`
 * to prepend pizzas with tomato sauce with a 🍅 emoji.
 */
function filterPizzas(pizzas, mapperFn) {
  return pizzas;
}

export default function Page() {
  /**
   * Or do it here, if that feels more comfortable.
   */
  const filteredPizzas = filterPizzas(pizzas);

  return (
    <ExercisePage>
      <h1>One</h1>
      <p></p>
      <PizzaList items={filteredPizzas} />
    </ExercisePage>
  );
}
