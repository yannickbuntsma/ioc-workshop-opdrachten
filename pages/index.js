import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Exercises</h1>

        <ul>
          <li>
            <Link href="/exercises/1">Exercise 1</Link>
          </li>
          <li>
            <Link href="/exercises/2">Exercise 2</Link>
          </li>
          <li>
            <Link href="/exercises/3">Exercise 3</Link>
          </li>
        </ul>
      </main>

      <footer>Created with ❤️</footer>
    </div>
  );
}
