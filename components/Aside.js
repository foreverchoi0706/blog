import Link from "next/link";

const Aside = () => {
  return (
    <aside className="flex-col border-2 w-72 p-5">
      <nav>
        <li>
          <Link href="/">TEST</Link>
        </li>
        <li>
          <Link href="/post">TEST</Link>
        </li>
        <li>
          <Link href="">TEST</Link>
        </li>
        <li>
          <Link href="">TEST</Link>
        </li>
        <li>
          <Link href="">TEST</Link>
        </li>
        <li>
          <Link href="">TEST</Link>
        </li>
      </nav>
      <div className="">


      </div>
    </aside>
  );
};

export default Aside;
