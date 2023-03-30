import { ExercisePage } from '../../components/ExercisePage';
import { PizzaList } from '../../components/PizzaList';

export default function Page() {
  return (
    <ExercisePage>
      <h1>Three</h1>
      <p>
        <strong>
          Allow PizzaList to accept a component that will be used to render each
          item in the list. E.g. render every pizza with a price of 10 or
          greater in a red font (or base the font size on the price of the
          pizza).
        </strong>
      </p>

      <PizzaList />
    </ExercisePage>
  );
}
