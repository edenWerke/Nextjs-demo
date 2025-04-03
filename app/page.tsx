// import {Greet} from './components/Greet';
// // Uncomment the following line if you want to use the Counter component
// import Counter from './components/Counter';

// export default function Home() {
//   return (
//     <main>
//       <Greet />
//       {/* Uncomment the following line if you want to use the Counter component */}
//       <Counter />
//     </main>
//   );
// }
import Link from 'next/link';
import ProductCard from './components/ProductCard'
export default function Page() {
  return (
    <main>
      <h1>Hello nexvvvt.jsx</h1>
      <ProductCard/>
      <Link href="/user">Users</Link>
    </main>
  );
}  