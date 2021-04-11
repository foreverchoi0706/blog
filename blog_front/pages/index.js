import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-green-500 hover:bg-green-700">
        Hello, Tailwind CSS!
      </button>
      <footer></footer>
    </div>
  );
}
