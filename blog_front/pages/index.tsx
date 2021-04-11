import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Hello, Tailwind CSS!
      </button>
    </p>
  </Layout>
);

export default IndexPage;
