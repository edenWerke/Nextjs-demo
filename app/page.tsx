import {Greet} from './components/Greet';
// Uncomment the following line if you want to use the Counter component
import Counter from './components/Counter';

export default function Home() {
  return (
    <main>
      <Greet />
      {/* Uncomment the following line if you want to use the Counter component */}
      <Counter />
    </main>
  );
}